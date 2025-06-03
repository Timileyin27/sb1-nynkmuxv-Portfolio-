import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PortfolioProfile } from "./screens/PortfolioProfile/PortfolioProfile";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <PortfolioProfile />
  </StrictMode>,
);
