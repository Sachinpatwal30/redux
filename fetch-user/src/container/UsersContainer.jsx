import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/userActions';

function UsersContainer() {



    const usersData= useSelector((state)=> state.users);

    const dispatch = useDispatch();
    console.log("hllo",usersData);
    

    useEffect(()=>{

        dispatch(fetchUsers())
    },[])

   


    return (
        <div>

   
    
     <h1>List of Users</h1>
     
     {usersData.isFetching && <h2>loading</h2>}

     {
        usersData && usersData.map((user)=>{ return <h3>user.name</h3>})
     }





        </div>
    )
}

export default UsersContainer