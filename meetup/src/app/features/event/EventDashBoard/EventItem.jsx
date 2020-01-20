import React from 'react'
import './EventItem.css'

// need to convert time 
const udtConvertToHuman = (time) => {
    let str = ''
    const timeArray = time.split(':')
    const hour = parseInt(time.split(':')[0])
    let amOrPm = 'AM'
    if (hour >= 12) {
        amOrPm = 'PM'
    }

    return str = `${time.slice(0, 5)} ${amOrPm}`

}
const EventItem = ({ event }) => {

    console.log(event)

    return (
        <div className='EventItem'>
            <div className='event-item-time gray-font '>{udtConvertToHuman(event.time.split('T')[1])} </div>
            <div className='event-item-detail'>
                <div className='event-item-host gray-font m-b-half'>{event.hostBy}</div>
                <div className='event-item-title m-b-half'>{event.title} @{event.venue}</div>
                <div className='event-item-going gray-font m-b-half'>{event.attendee.length} Campers Going</div>
            </div>

        </div>
    )
}

export default EventItem