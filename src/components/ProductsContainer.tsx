import Product from "./Product";
import { useCartContext } from "../context/CartContextProvider";


const ProductsContainer = () => {
    const { products } = useCartContext();
    return (
        <section className="laptop:pt-16 pt-12">
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