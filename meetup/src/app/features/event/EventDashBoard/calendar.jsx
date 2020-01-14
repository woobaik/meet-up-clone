import React, { Fragment, useState } from 'react'
import Calendar from 'react-calendar'


const DateCalendar = () => {
    const [date, setDate] = useState(new Date())

    const handleChange = (date) => {
        setDate(date)
        console.log('click date', date)
    }

    return (

        <Fragment>

            <Calendar value={date} onChange={handleChange} />
        </Fragment>
    )
}


export default DateCalendar