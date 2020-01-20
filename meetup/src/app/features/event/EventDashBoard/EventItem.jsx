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

    console.log(udtConvertToHuman(event.time.split('T')[1]))

    return (
        <div className='EventItem'>
            <div className='event-item-time gray-font '>{udtConvertToHuman(event.time.split('T')[1])} </div>
            <div className='event-item-detail'>
                <div className='event-item-host gray-font m-b-half'>FREE CODE CAMP - BAY AREA</div>
                <div className='event-item-title m-b-half'>Free Code Camp @ Noisebridge</div>
                <div className='event-item-going gray-font m-b-half'>9 campers going</div>
            </div>

        </div>
    )
}

export default EventItem