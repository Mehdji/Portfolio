import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

//warn - The `content` option in your Tailwind CSS configuration is missing or empty.
//warn - Configure your content sources or your generated CSS will be missing styles.
//warn - https://tailwindcss.com/docs/content-configuration
