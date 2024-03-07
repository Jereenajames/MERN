
import './App.css'
// import Products from './components/dynamic-route/Products';
// import Productshow from './components/dynamic-route/Productshow';
import Products from './components/Products';
import Reducer from './components/pages/Reducer';
import Aboutpage from './components/react-route/Aboutpage';
import Contactpage from './components/react-route/Contactpage';
import Homepage from './components/react-route/Homepage';
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createContext,useReducer,useEffect, useContext, useMemo, useState } from 'react';
import { Context } from './components/Context/Context';
import axios from 'axios';

export const Holder = createContext(null);
export const CartState = () => {
  return useContext(Holder)
}
// function App() {

//   const stateReducer = (state : any ,action :any) => {
//     switch (action.type) {
//       case "ADD_TODO":
//         return [...state,{value: action.payload}]
        
//       default:
//         throw new Error("Bad Action");
//     }
//   }
//   const [products, setProducts] = useState([{ name : 'Manpoj'}])
//   const [state, dispatch] = useReducer(stateReducer,products)


 

//   useMemo(() => {
//    axios.get('http://fakestoreapi.com/products')
//    .then((response : any) => {
//       setProducts(response.data)
//       console.log(response.data,"response data")
//    })
//   }, [])
  

//   return (

//     <Holder.Provider value={{state, dispatch}} >

// <div className='header'>
//         <header> Flipkart</header>
     
   
//         {/* <Products /> */}
//         <Router>

//           <Nav />
//           <Routes>
//             <Route path='/' element={<Homepage />} />
//             <Route path='/about' element={<Aboutpage />} />
//             <Route path='/product' element={ <Products /> } />
//             <Route path='/reducer' element={<Reducer />} />
//             <Route path='/context' element={<Context/>} />
//           </Routes>
//         </Router>

        

//       </div>


//     </Holder.Provider>

 
//   )
// }


function App () {
 
  const [data, setdata] = useState('Manoj')
  function handleClick(){
    setdata("Jereena")
    
  }
  return(
    <div>
      <p> Hello World {data}</p>
      <button onClick={() => handleClick()}> CLick</button>
      </div>
  )
}

export default App
