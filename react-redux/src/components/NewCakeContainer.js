import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';

function NewCakeContainer() {

    const numOfCakes = useSelector((state) => { return state.cake.noOfCakes });
    const dispatch = useDispatch();
    const [number,setNumber]= useState(1);




    return (
        <div>
            <h2>Number of  cakes:{numOfCakes} </h2>
            <input type="text" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
            <button onClick={() => { dispatch(buyCake(number)) }} >buy cakes</button>
        </div>
    )
}

export default NewCakeContainer;