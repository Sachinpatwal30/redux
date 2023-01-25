import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {buyShoes} from "../redux/shoes/shoesActions"

function ShoesContainer() {

    const numOfShoes= useSelector(state=> state.shoe.noOfShoes);

    const dispatch= useDispatch();

    return (
        <div>
            <h2>Number of  shoes:{numOfShoes} </h2>
            <button onClick={()=>{dispatch( buyShoes()  )}}  >buy shoes</button>
        </div>
    )
}

export default ShoesContainer