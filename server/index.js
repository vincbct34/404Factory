import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import { handleContact } from "./contact-handler.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");

const app = express();

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

app.use(express.static(distDir));

app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) {
    next();
    return;
  }
  res.sendFile(path.join(distDir, "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
