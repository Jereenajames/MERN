import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Products from './Components/Products'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Home /> */}
        {/* <About/> */}
       <Products/>
        <hr/>
        </div>
    </>
  );
}

export default App;
