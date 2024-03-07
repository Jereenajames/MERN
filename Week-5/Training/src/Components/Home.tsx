import React from "react";
import { useState } from "react";
interface HomeProps{
displayName :string;
age:number;
}

interface Isum{
    a:number; 
    b:number;
}

const Home = ({ displayName, age}: HomeProps) =>{
    const[const,setCount] = useState(0);
    
    function calc(){
        setCount((prev)=> prev+1);
    }
    function sum (iVar:Isum)
{
    console.log(iVar.a + iVar.b);
    
}
sum ({a:2,b:3});
return(
    <div>
        <h2> Home, {displayName} </h2>
    </div>
)
}


const Home = () =>{
    return(
        <>
        <h2>Home, {display}</h2>
        <h2>{age}</h2>
        <p>{count}</p>
        <button onClick={calc}>Click</button>
        </>
    );
}
export default Home;