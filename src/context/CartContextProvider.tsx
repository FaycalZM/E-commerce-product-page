import { createContext, useContext, useReducer, useState } from "react";
import { CartContextProviderProps, CartContextType, CartItem, Cart } from "../types/Types";
import data from '../data/data.json'
import CartReducer from "../reducers/CartReducer";

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
    cartItems: data,
}


const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [cartData, dispatch] = useReducer(CartReducer, CartInitialState);

    return (
        <CartContext.Provider value={{
            cartData,
            dispatch
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider