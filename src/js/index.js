import React from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './layout.js'
import "../styles/index.css";
import "../styles/home.css";
import "../styles/twinkling.css";

//
const root = createRoot(document.querySelector("#app"))

root.render(
    <React.StrictMode>
        <Layout />
    </React.StrictMode>
);