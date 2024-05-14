// Función para obtener el ID del producto de la URL
export const getProductId = (pathname) => {
    const segments = pathname.split("/");
    const productId = segments[segments.length - 1];
    return productId;
};

// Otras funciones de utilidad
export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
};

// Otras funciones...
