import { useCartContext } from "../context/CartContextProvider"
import Product from "./Product";


const ProductsContainer = () => {
    const { cartData } = useCartContext();
    return (
        <section className="pt-16">
            {
                cartData.cartItems.length
                    ? cartData.cartItems.map((cartItem) => {
                        return <Product key={cartItem.id} {...cartItem} />
                    })
                    : <h1>No data</h1>
            }
        </section>
    )
}

export default ProductsContainer