import React from 'react'
import { MdDelete } from 'react-icons/md'
import './removeFromList.css'

export const removeFromList = () => {
  return (
    <div className='overlay'>
      <MdDelete className='overlay__icon remove' />
      Delete from List
    </div>
  )
}
