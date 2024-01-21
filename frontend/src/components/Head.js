import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice.js';

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () =>{
    dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img 
        onClick={()=> toggleMenuHandler()} 
        className="h-8 cursor-pointer" src='https://th.bing.com/th/id/OIP.tQmL3J28pFPoRIHXj_RQhQHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='hamburg'/>

        <a href='/'>
        <img className="h-8 mx-2" src='https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png' alt='logo'></img>
        </a>
      </div>
      <div className='col-span-10 px-10'>
        <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text'/>
        <button className='border border-gray-400 px-5 p-2 bg-gray-100 rounded-r-full'>🔍</button>
      </div>
      <div>
        <img className="col-span-1 h-8" src='https://www.bing.com/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&w=204&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' alt='user'/>
      </div>
    </div>
  )
}

export default Head
