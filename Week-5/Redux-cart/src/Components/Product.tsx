import React from 'react'
import { UseDispatch, useDispatch } from 'react-redux'

export const Product = ({product}: any) => {
    const dispatch = useDispatch()
  return (
    <div>
<h2>{product.title}</h2>
<h3>{product.discription}</h3>

    </div>
  )
}
