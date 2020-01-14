import React from 'react'
import { Segment } from 'semantic-ui-react'
import EventItem from './EventItem'

export const EventList = () => {
    return (
        <Segment.Group>
            <Segment><EventItem /></Segment>
            <Segment>EVENT2</Segment>
            <Segment>EVENT3</Segment>
            <Segment>EVENT4</Segment>
        </Segment.Group>

    )
}

