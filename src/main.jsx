import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "../scss/custom.scss";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Header from "./pages/components/Header.jsx";

createRoot(document.getElementById("root")).render(
        <StrictMode>
                <BrowserRouter>
                        <Header />
                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/gallery" element={<Gallery />} />
                                <Route path="/contact" element={<Contact />} />
                        </Routes>
                </BrowserRouter>
        </StrictMode>
);
