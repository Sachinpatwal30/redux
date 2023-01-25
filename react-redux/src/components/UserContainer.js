import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/user/userActions';

function UserContainer() {


  const userData = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {


    dispatch(fetchUsers())

  }, [])

  return (
    <div>
      
   
      {
        userData.map((user)=>{return <h1>user.name</h1>})
      }


      
      </div>
  )
}

export default UserContainer;