import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

/** Dev-only middleware mirroring the prod /api/contact Express route */
function contactApiPlugin(): Plugin {
  return {
    name: "contact-api",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 404;
          res.end();
          return;
        }

        const chunks: Buffer[] = [];
        for await (const chunk of req) {
          chunks.push(chunk as Buffer);
        }

        res.setHeader("Content-Type", "application/json");

        try {
          const body = JSON.parse(Buffer.concat(chunks).toString("utf-8"));
          const { handleContact } = await import("./server/contact-handler.js");
          await handleContact(body);
          res.statusCode = 200;
          res.end(JSON.stringify({ ok: true }));
        } catch (error) {
          console.error("Contact form error:", error);
          res.statusCode = 400;
          res.end(JSON.stringify({ ok: false }));
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load all env vars (not just VITE_-prefixed) so the dev plugin can read
  // RESEND_* secrets from .env without bundling them to the client.
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return {
    plugins: [react(), contactApiPlugin()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
