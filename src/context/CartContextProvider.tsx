import { createContext, useContext, useReducer } from "react";
import { CartContextProviderProps, CartContextType, Cart, ProductType, ProductSliderType } from "../types/Types";
import CartReducer from "../reducers/CartReducer";
import data from '../data/data.json'
import ProductsReducer from "../reducers/ProductsReducer";
import SliderReducer from "../reducers/SliderReducer";


const CartContext = createContext<CartContextType | null>(null);

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartContextProvider');
    }
    return context;
}

const CartInitialState: Cart = {
    isVisible: false,
    cartItems: [],
    totalItems: 0,
}

const ProductsInitialState: Array<ProductType> = data;

const ProductSliderInitialState: ProductSliderType = {
    isVisible: false,
    props: {
        currentImageIndex: 0,
        images: null,
        productID: null
    },
}


const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [cartData, dispatchCart] = useReducer(CartReducer, CartInitialState);
    const [products, dispatchProducts] = useReducer(ProductsReducer, ProductsInitialState);
    const [productSlider, dispatchProductSlider] = useReducer(SliderReducer, ProductSliderInitialState);
    return (
        <CartContext.Provider value={{
            cartData,
            dispatchCart,
            products,
            dispatchProducts,
            productSlider,
            dispatchProductSlider,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider