import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./view/App";
import Contact from "./view/contact/contact";
import About from "./view/about/about";
import Blog from "./view/blog/blog";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog/:category" element={<Blog />} />
    </Routes>
  </BrowserRouter>
);
