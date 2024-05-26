export const getProductId = (pathname) => {
    const segments = pathname.split("/");
    const productId = segments[segments.length - 1];
    return productId;
};

export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
};

