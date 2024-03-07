import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import CartContext from './ContextAPI/Context/CartContext'
import Context from './Context/Context'


const Nav = () => {
  return (
    <ul>
        <li> <Link to='/'>Home </Link> </li>
        <li><Link to='/about'>About </Link> </li>
        <li><Link to='/product'> Product - routing,useState,mapping </Link> </li>
        <li><Link to='/reducer'> useReducer </Link> </li>
        <li><Link to='/context'>Context</Link> </li>
    </ul>
  )
}

export default Nav