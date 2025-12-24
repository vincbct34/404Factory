import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Snowfall from "react-snowfall";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Snowfall
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 999999,
        pointerEvents: "none",
      }}
      snowflakeCount={150}
      speed={[0.5, 2]}
      wind={[-0.5, 1]}
      radius={[1, 4]}
    />
    <App />
  </StrictMode>,
);
