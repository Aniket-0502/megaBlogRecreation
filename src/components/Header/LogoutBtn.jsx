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
    className='inline-block px-6 py-2 items-center hover:text-red-600 font-semibold hover:underline decoration-wavy underline-offset-4'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn