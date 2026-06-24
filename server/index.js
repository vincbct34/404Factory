import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import { handleContact } from "./contact-handler.js";
import { fetchEndorsements } from "./endorsements.js";
import { injectSeo } from "./seo.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");

// Read the built shell once at startup; rewritten per request for SEO.
const indexHtml = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

const app = express();

app.use((req, res, next) => {
  const host = req.headers.host?.split(":")[0];

  if (host === "404factory.vincent-bichat.fr") {
    return res.redirect(301, `https://www.404-factory.com${req.originalUrl}`);
  }

  next();
});

app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {
    await handleContact(req.body);
    res.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(400).json({ ok: false });
  }
});

app.get("/api/endorsements", async (_req, res) => {
  try {
    res.json(await fetchEndorsements());
  } catch (error) {
    console.error("Endorsements fetch error:", error);
    res.status(502).json({ reviews: [], stats: null });
  }
});

app.use(express.static(distDir));

app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) {
    next();
    return;
  }
  res.set("Content-Type", "text/html; charset=utf-8");
  res.send(injectSeo(indexHtml, req.path));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
