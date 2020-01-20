import React, { Fragment } from 'react'
import { Segment } from 'semantic-ui-react'
import EventItem from './EventItem'


//  arrange events group by its date
const groupByDate = (events) => {
    const result = {}

    for (let event of events) {
        const date = event.time.split('T')[0]
        if (result[date]) {
            result[date].push(event)
        } else {
            result[date] = [event]
        }
    }
    return result
}



export const EventList = ({ events }) => {

    const eventGroup = groupByDate(events)


    return (
        <Fragment>
            {
                Object.keys(eventGroup).map(date => {
                    return (
                        <Fragment key={date}>
                            <div>
                                {date}
                            </div>
                            <Segment.Group>
                                {eventGroup[date].map(event => {
                                    return (<Segment key={event.id}><EventItem event={event} /></Segment>)
                                })}
                            </Segment.Group>

                        </Fragment>

                    )
                })
            }
        </Fragment>


    )
}
