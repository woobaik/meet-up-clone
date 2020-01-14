import React, { Fragment, useState } from 'react'
import Calendar from 'react-calendar'
import { Button } from 'semantic-ui-react'
import './calendar.css'

const DateCalendar = () => {
    const [date, setDate] = useState(new Date())

    const handleChange = (date) => {
        setDate(date)
        console.log('click date', date)
    }

    return (

        <Fragment>
            <div className='today-container'>
                <Button color='yellow' onClick={() => setDate(new Date())} className='today-button'>Today</Button>
            </div>
            <Calendar value={date} onChange={handleChange} />
        </Fragment>
    )
}


export default DateCalendar