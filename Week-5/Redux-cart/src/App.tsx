import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Nav } from './Components/Nav'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import { Products } from './Components/Products'
import { Cart } from './Components/Cart'
import { Product } from './Components/Product'
function App() {
  const [count, setCount] = useState(0)

  return (
    <><Router>
        <Nav/>
        <Routes>
          <Route path='/'  element ={<Products/>}/>
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart'  element={<Cart />} />
        </Routes>
    </Router>
    
        
    </>
  )
}

export default App
