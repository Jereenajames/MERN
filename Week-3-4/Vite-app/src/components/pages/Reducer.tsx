import React, { useState ,useReducer} from 'react'
import { act } from 'react-dom/test-utils'

const Reducer = () => {

    const [initialValue, setinitial] = useState(
        [
            {
                id : 1,
                name : "Manoj",
                age : 20
            },
            {
                id : 2,
                name : "Prabaa",
                age : 30
            }
        ]
        )

    let formValue = {
        id : 1,
        name : "Rama",
        age : 20
    }

    let updateValue = {
        id : 1,
        name : "Updated Name",
        age : 50
    }

    const userReducer = (users : any,action : any) => {
       
        switch (action.type) {
            case 'ADD_USER':
                return [...users,action.payload]
            case 'DELETE_USER' : 
                console.log(action.payload,"Payload")
                return users.filter((user : any) => user.id !== +action.payload.id)
            case 'UPDATE_USER':
                console.log(action.payload)
                return users.map((ele : any) => {
                    if(ele.id == action.payload.id){
                        return action.payload
                    }else{
                        return ele
                    }
                })
            default:
                return users;
        }
    }

    const [users, dispatchusers] = useReducer( userReducer, initialValue)

  return (
    <>
        <h1> useReducer </h1>
        {users.map((user : any) => {
            return(
                <div key={user.id}> 
                    <p> Name : {user.name}</p>
                    <p> Age : {user.age}</p>
                    <button onClick={() => dispatchusers({type : 'UPDATE_USER',payload : updateValue })}> Update </button>
                    <button onClick={() => dispatchusers({type : 'DELETE_USER',payload : user })}> Delete </button>
                </div>
            )
        })}
        <button onClick={() => dispatchusers({type : 'ADD_USER',payload : {...formValue}})}> Add new values </button>
        {console.log(users)}
    </>
  )
}

export default Reducer