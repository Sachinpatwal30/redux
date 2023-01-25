import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buyIceCream } from '../redux/iceCream/iceCreamActions';

function IceCreamContainer() {

    const numOfIceCreams= useSelector((state)=> state.iCream.noOfIceCreams);
    const dispatch = useDispatch();


  return (
    <div>
    <h2>Number of  iceCream:{numOfIceCreams} </h2>
  <button onClick={()=>{dispatch(buyIceCream())}} >buy cakes</button>
</div>
  )
}

export default IceCreamContainer;