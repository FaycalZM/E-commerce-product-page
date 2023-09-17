import { ProductSliderAction, ProductSliderType } from "../types/Types";

const SliderReducer = (productSlider: ProductSliderType, action: ProductSliderAction) => {
    switch (action.type) {
        case 'OPEN_SLIDER': {
            return {
                ...productSlider,
                isVisible: true,
            }
        }
        case 'CLOSE_SLIDER': {
            return {
                ...productSlider,
                isVisible: false,
            }
        }
        case 'UPDATE_SLIDER_PROPS': {
            return {
                ...productSlider,
                props: action.payload.props,
            }
        }
        default: {
            return { ...productSlider };
        }
    }
}


export default SliderReducer