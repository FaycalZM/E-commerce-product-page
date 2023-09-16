import { createContext, useContext, useReducer } from "react";
import { CartContextProviderProps, CartContextType, Cart, ProductType } from "../types/Types";
import CartReducer from "../reducers/CartReducer";
import data from '../data/data.json'
import ProductsReducer from "../reducers/ProductsReducer";


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
}

const ProductsInitialState: Array<ProductType> = data;


const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [cartData, dispatchCart] = useReducer(CartReducer, CartInitialState);
    const [products, dispatchProducts] = useReducer(ProductsReducer, ProductsInitialState);
    return (
        <CartContext.Provider value={{
            cartData,
            dispatchCart,
            products,
            dispatchProducts
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider