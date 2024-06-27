import React from 'react'
import {useDispatch} from 'react-redux' 
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

/*
useDispatch for executing store functions
authService to actually logout
logout from store to update store variables
*/

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn