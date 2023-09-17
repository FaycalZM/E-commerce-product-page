import { Cart, CartAction, CartItem } from "../types/Types";


const searchById = (cartItems: Array<CartItem>, id: number) => {
    let foundItem = false;
    for (const cartItem of cartItems) {
        if (cartItem.id === id) {
            foundItem = true;
            break;
        }
    }
    return foundItem;
}

const CartReducer = (cart: Cart, action: CartAction): Cart => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART': {
            if (action.payload.item.quantity === 0) {
                return { ...cart };
            }
            else {
                let itemExists = searchById(cart.cartItems, action.payload.item.id);
                if (!itemExists) {
                    return {
                        ...cart,
                        cartItems: [
                            ...cart.cartItems,
                            action.payload.item
                        ]
                    }
                }
                else {
                    return {
                        ...cart,
                        cartItems: cart.cartItems.map(cartItem => {
                            if (cartItem.id === action.payload.item.id) {
                                return {
                                    ...cartItem,
                                    quantity: cartItem.quantity + action.payload.item.quantity
                                };
                            }
                            else {
                                return cartItem;
                            }
                        })
                    }
                }
            }

        }
        case 'REMOVE_ITEM_FROM_CART': {
            return {
                ...cart,
                cartItems: cart.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        }
        case 'TOGGLE_CART': {
            return {
                ...cart,
                isVisible: !cart.isVisible
            }
        }
        case 'UPDATE_TOTAL_ITEMS': {
            return {
                ...cart,
                totalItems: cart.cartItems.reduce(
                    (totalNumber: number, currentCartItem: CartItem) => {
                        return totalNumber + currentCartItem.quantity;
                    },
                    0
                )
            }
        }
        default: {
            return { ...cart };
        }
    }
}



export default CartReducer