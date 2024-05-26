import React from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './layout.js'
import { FavoritesProvider } from './store/favorites.Context.jsx';
import "../styles/home.css";
import "../styles/twinkling.css";
import '../styles/index.css';



const appElement = document.querySelector("#app");

if (appElement) {
    const root = createRoot(appElement);

    root.render(
        <React.StrictMode>
            <FavoritesProvider>
                <Layout />
            </FavoritesProvider>
        </React.StrictMode>
    );
} else {
    console.error("No se encontró un elemento con el ID #app en el documento HTML.");
}