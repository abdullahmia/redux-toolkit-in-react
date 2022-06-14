import { Route, Routes } from 'react-router-dom'
import Header from './componenets/header/Header'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'

const Main = () => {
  return (
    <div>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    </div>
  )
}

export default Main;