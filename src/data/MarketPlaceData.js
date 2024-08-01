// src/service/productData.js

export const ProductService = {
   

    getProductsSmall() {
        return Promise.resolve(this.products.slice(0, 5)); // Example: first 5 items
    }
};


