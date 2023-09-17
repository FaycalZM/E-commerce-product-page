import './App.css'
import Header from './components/Header'
import ProductSlider from './components/ProductSlider'
import ProductsContainer from './components/ProductsContainer'
import { useCartContext } from './context/CartContextProvider'

function App() {
  const { productSlider } = useCartContext();
  return (
    <main className='laptop:px-48 tablet:px-10 pb-12 font-kumbh-sans relative'>
      <Header />
      <ProductsContainer />
      {
        productSlider.isVisible ? <ProductSlider {...productSlider.props} /> : null
      }
    </main>
  )
}

export default App
