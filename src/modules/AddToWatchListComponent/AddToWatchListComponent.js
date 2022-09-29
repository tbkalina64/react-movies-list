import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import './AddToWatchListComponent.css'


export const AddToWatchListComponent = () => {
    return (
        <div className='overlay'>
            <AiFillStar className='overlay__icon add' />
            Add to watchlist
        </div>
    )
}
