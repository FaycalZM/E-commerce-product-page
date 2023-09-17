import './App.css'
import Header from './components/Header'
import { CloseIcon, MenuIcon } from './components/Icons'
import ProductSlider from './components/ProductSlider'
import ProductsContainer from './components/ProductsContainer'
import { useCartContext } from './context/CartContextProvider'

function App() {
  const { productSlider, isMenuOpened, toggleMenu } = useCartContext();
  return (
    <main className='laptop:px-48 tablet:px-10 pb-12 font-kumbh-sans relative'>
      <button
        onClick={toggleMenu}
        className='menu-btn tablet:hidden block fixed top-0 left-0 z-40 py-8 px-6 scale-125'>
        {
          isMenuOpened ? <CloseIcon /> : <MenuIcon />
        }
      </button>
      <Header />
      <ProductsContainer />
      {
        productSlider.isVisible ? <ProductSlider {...productSlider.props} /> : null
      }
    </main>
  )
}

export default App
