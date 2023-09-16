import Product from "./Product";
import { useCartContext } from "../context/CartContextProvider";


const ProductsContainer = () => {
    const { products } = useCartContext();
    return (
        <section className="pt-16">
            {
                products.length
                    ? products.map((product) => {
                        return <Product key={product.id} {...product} />
                    })
                    : <h1>No data</h1>
            }
        </section>
    )
}

export default ProductsContainer