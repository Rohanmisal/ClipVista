import React from 'react'
import Button from './Button.js'

const ButtonList = () => {
  return (
    <div className='flex'>
    
    <Button className= "w-10 h-10 rounded-full" name="<" />
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Live"/>
      <Button name="Cricket"/>
      <Button name="box"/>
      <Button name="Gaming"/>
      <Button name="Live"/>
      <Button name="Cricket"/>
    <Button className= "w-10 h-10" name=">" />
   
      
    </div>
  )
}

export default ButtonList
