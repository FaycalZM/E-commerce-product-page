import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import CartContextProvider from './context/CartContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
)
