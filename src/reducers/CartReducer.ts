import { Cart, CartAction } from "../types/Types";




const CartReducer = (cart: Cart, action: CartAction): Cart => {
    switch (action.type) {
        case 'PLUS_ONE_ITEM': {
            return { ...cart };
        };
        case 'MINUS_ONE_ITEM': {
            return { ...cart };
        }
        case 'ADD_ITEM_TO_CART': {
            return { ...cart };
        }
        case 'REMOVE_ITEM_FROM_CART': {
            return { ...cart };
        }
        case 'TOGGLE_CART': {
            return {
                ...cart,
                isVisible: !cart.isVisible
            }
        }
        default: {
            return { ...cart };
        }
    }
}



export default CartReducer