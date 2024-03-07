import React from 'react'

const cartReducer = (state: any,action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload]      
      ;
    case 'REMOVE_FROM_CART':
      return state.filter((item: { id: any; }) => item.id !== action.payload);
    default:
      break;
  }
}

export default cartReducer