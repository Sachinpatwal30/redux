import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function HooksCakeContainer() {
    
    const numOfCakes= useSelector((state)=>{return state.cake.noOfCakes})
    const dispatch= useDispatch();
  return (
    <div>
    <h2>Number of  cakes:{numOfCakes} </h2>
  <button onClick={()=>{dispatch(buyCake())}} >buy cakes</button>
</div>
  )
}

export default HooksCakeContainer