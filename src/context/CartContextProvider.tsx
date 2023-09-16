import { createContext, useContext, useState } from "react";
import { CartContextProviderProps, CartContextType, CartItem } from "../types/Types";
import data from '../data/data.json'

const CartContext = createContext<CartContextType | null>(null);

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartContextProvider');
    }
    return context;
}


const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [cartData, setCartData] = useState<Array<CartItem>>(data);
    const [isCartVisible, setIsCartVisible] = useState<boolean>(false);
    const toggleCart = () => {
        setIsCartVisible(prevState => !prevState);
    }
    return (
        <CartContext.Provider value={{
            cartData,
            isCartVisible,
            setCartData,
            toggleCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider