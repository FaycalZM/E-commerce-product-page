import React from "react";


export enum CartActions {
    ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
    REMOVE_ITEM_FROM_Cart = 'REMOVE_ITEM_FROM_CART',
    TOGGLE_CART = 'TOGGLE_CART',
    UPDATE_TOTAL_ITEMS = 'UPDATE_TOTAL_ITEMS',
}

export interface CartAction {
    type: CartActions;
    payload: any;
}

export enum ProductsActions {
    PLUS_ONE_ITEM = 'PLUS_ONE_ITEM',
    MINUS_ONE_ITEM = 'MINUS_ONE_ITEM',
    SELECT_IMAGE = 'SELECT_IMAGE',
}
export interface ProductsAction {
    type: ProductsActions;
    payload: any;
}

export enum ProductSliderActions {
    OPEN_SLIDER = 'OPEN_SLIDER',
    CLOSE_SLIDER = 'CLOSE_SLIDER',
    UPDATE_SLIDER_PROPS = 'UPDATE_SLIDER_PROPS',
}

export interface ProductSliderAction {
    type: ProductSliderActions;
    payload: any;
}

export type AvatarProps = {
    imageURL: string;
}

export type CartContextType = {
    cartData: Cart;
    dispatchCart: React.Dispatch<CartAction>;
    products: Array<ProductType>;
    dispatchProducts: React.Dispatch<ProductsAction>;
    productSlider: ProductSliderType;
    dispatchProductSlider: React.Dispatch<ProductSliderAction>;
    isMenuOpened: boolean;
    toggleMenu: () => void;
}

export type CartContextProviderProps = {
    children: React.ReactNode;
}

export type Cart = {
    isVisible: boolean;
    cartItems: Array<CartItem>;
    totalItems: number;
}

export type ImagesType = {
    large: Array<string>;
    thumbnails: Array<string>;
}

export type CartItem = {
    id: number;
    productName: string;
    currentPrice: number;
    quantity: number;
    image: string;
}

export type ProductType = {
    id: number;
    companyName: string;
    productName: string;
    description: string;
    currentPrice: number;
    originalPrice: number | null;
    discount: string | null;
    quantity: number;
    images: ImagesType;
    currentImageIndex: number;
}

export type ProductSliderProps = {
    currentImageIndex: number;
    images: ImagesType | null;
    productID: number | null;
};

export type ProductSliderType = {
    isVisible: boolean;
    props: ProductSliderProps;
}