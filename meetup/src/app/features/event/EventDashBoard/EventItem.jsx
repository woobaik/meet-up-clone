import React from 'react'
import './EventItem.css'

const EventItem = () => {
    return (
        <div className='EventItem'>
            <div className='event-item-time gray-font '>11:00 AM </div>
            <div className='event-item-detail'>
                <div className='event-item-host gray-font m-b-half'>FREE CODE CAMP - BAY AREA</div>
                <div className='event-item-title m-b-half'>Free Code Camp @ Noisebridge</div>
                <div className='event-item-going gray-font m-b-half'>9 campers going</div>
            </div>

        </div>
    )
}

export default EventItem