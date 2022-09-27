import React from 'react'
import { MdDelete } from 'react-icons/md'
import './RemoveFromWatchList.css'

export const RemoveFromWatchList = () => {
  return (
    <div className='overlay'>
      <MdDelete className='overlay__icon remove' />
      Delete from List
    </div>
  )
}
