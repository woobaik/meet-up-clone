import React, { Fragment } from 'react'
import { Segment } from 'semantic-ui-react'
import EventItem from './EventItem'

export const EventList = () => {
    return (
        <Fragment>
            <div>
                TUESDAY, JANUARY 14
            </div>
            <Segment.Group>
                <Segment><EventItem /></Segment>
                <Segment><EventItem /></Segment>
            </Segment.Group>

            <div>
                TUESDAY, JANUARY 16
            </div>
            <Segment.Group>
                <Segment><EventItem /></Segment>
                <Segment><EventItem /></Segment>
            </Segment.Group>
        </Fragment>
    )
}

