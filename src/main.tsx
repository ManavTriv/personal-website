import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Home from "./pages/Home";

const root = document.getElementById("root");
if (!root) throw new Error("missing #root element in index.html");

createRoot(root).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
