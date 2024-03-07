import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
        <ul>
            <li><Link to='/'>Home</Link></li>            
            <li><Link to='/products/:id'>Product</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
        </ul>
    </div>
  )
}
