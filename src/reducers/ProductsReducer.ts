import { ProductType, ProductsAction } from "../types/Types";


const ProductsReducer = (products: Array<ProductType>, action: ProductsAction) => {
    switch (action.type) {
        case 'PLUS_ONE_ITEM': {
            return products.map((product) => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }
                else return product;
            })

        };
        case 'MINUS_ONE_ITEM': {
            return products.map((product) => {
                if (product.id === action.payload.id) {
                    if (product.quantity === 0) {
                        return product;
                    }
                    else return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                }
                else return product;
            })

        }
        default: {
            return [...products];
        }
    }

}


export default ProductsReducer