import React from "react";

export type AvatarProps = {
    imageURL: string;
}

export type CartContextType = {
    cartData: Array<CartItem>;
    isCartVisible: boolean;
    setCartData: React.Dispatch<React.SetStateAction<Array<CartItem>>>;
    toggleCart: () => void;
}

export type CartContextProviderProps = {
    children: React.ReactNode;
}

export type Cart = {
    isVisible: boolean;
    cartItems: Array<CartItem>;
}

type ImagesType = {
    large: Array<string>;
    thumbnails: Array<string>;
}

export type CartItem = {
    companyName: string;
    productName: string;
    description: string;
    currentPrice: number;
    originalPrice: number | null;
    discount: string | null;
    images: ImagesType;
    currentImageIndex: number;
}
