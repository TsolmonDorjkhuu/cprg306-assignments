"use client"
import { useState } from "react";

export default function Page(){

    const [quantity, setQuantity] = useState(0) 

    function increment(){
        if(quantity >= 20){
            return;
        }
        setQuantity(quantity + 1)
    }

    function decrement(){
        if(quantity <= 1){
            return;
        }
        setQuantity(quantity - 1)
    }

    return(
        <div className="w-fit mx-auto">
            <p className="text-center my-6">{quantity}</p>
            <button onClick={decrement} className="w-fit m-2 bg-teal-900 rounded p-2">decrement</button>
            <button onClick={increment} className="w-fit m-2 bg-teal-900 rounded p-2">increment</button>
        </div>
    );
}