import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import './AddToWatchList.css'


export const AddToWatchList = () => {
    return (
        <div className='overlay'>
            <AiFillStar className='overlay__icon add' />
            Add to watchlist
        </div>
    )
}
