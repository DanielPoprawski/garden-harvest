import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "../scss/custom.scss";
import Home from "./pages/Home.jsx";

createRoot(document.getElementById("root")).render(
        <StrictMode>
                <Home />
        </StrictMode>
);
