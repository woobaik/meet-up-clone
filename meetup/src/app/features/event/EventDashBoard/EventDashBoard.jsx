import React, { Fragment } from 'react';
import { Grid, Container, Button, Modal } from 'semantic-ui-react';
import { EventList } from './EventList'
import DateCalendar from './calendar'
import Form from './EventForm'
import './EventDashBoard.css'

const events =
    [
        {
            id: 1,
            title: 'DanceHack 2020: Reality features TECH + DANCE Collaborations!',
            time: '2017-10-04T20:24:30+00:00',
            venue: 'Noisebridge',
            hostBy: 'Free Code Camp',
            attendee: [
                {
                    name: 'Alex Huesing',
                    image: 'https://randomuser.me/api/portraits/thumb/men/75.jpg'

                },
                {
                    name: 'Kari Rasmussen',
                    image: 'https://randomuser.me/api/portraits/thumb/women/75.jpg'
                },
                {
                    name: 'Alexander Alvarez',
                    image: 'https://randomuser.me/api/portraits/thumb/women/25.jpg'
                },
                {
                    name: 'Paul Kenji',
                    image: 'https://randomuser.me/api/portraits/thumb/women/75.jpg'
                }
            ]
        },

        {
            id: 2,
            title: '101 Intro to Ableton Live -- All are Welcome! Bring Questions or Just Show Up.',
            time: '2017-10-05T14:24:30+00:00',
            venue: 'CounterPulse',
            hostBy: 'KINETECH ARTS',
            attendee: [
                {
                    name: 'Alex Huesing',
                    image: 'https://randomuser.me/api/portraits/thumb/men/75.jpg'

                },
                {
                    name: 'Kari Rasmussen',
                    image: 'https://randomuser.me/api/portraits/thumb/women/75.jpg'
                },
                {
                    name: 'Alexander Alvarez',
                    image: 'https://randomuser.me/api/portraits/thumb/women/25.jpg'
                },
                {
                    name: 'Paul Kenji',
                    image: 'https://randomuser.me/api/portraits/thumb/women/75.jpg'
                }
            ]
        }, {
            id: 3,
            title: '101 Intro to Ableton Live -- All are Welcome! Bring Questions or Just Show Up.',
            time: '2017-10-05T00:11:30+00:00',
            venue: 'CounterPulse',
            hostBy: 'KINETECH ARTS',
            attendee: [
                {
                    name: 'Alex Huesing',
                    image: 'https://randomuser.me/api/portraits/thumb/men/75.jpg'

                },
                {
                    name: 'Kari Rasmussen',
                    image: 'https://randomuser.me/api/portraits/thumb/women/75.jpg'
                },
                {
                    name: 'Alexander Alvarez',
                    image: 'https://randomuser.me/api/portraits/thumb/women/25.jpg'
                },
                {
                    name: 'Paul Kenji',
                    image: 'https://randomuser.me/api/portraits/thumb/women/75.jpg'
                }
            ]
        }, {
            id: 4,
            title: '101 Intro to Ableton Live -- All are Welcome! Bring Questions or Just Show Up.',
            time: '2017-10-05T10:30:30+00:00',
            venue: 'CounterPulse',
            hostBy: 'KINETECH ARTS',
            attendee: [
                {
                    name: 'Alex Huesing',
                    image: 'https://randomuser.me/api/portraits/thumb/men/75.jpg'

                },
                {
                    name: 'Kari Rasmussen',
                    image: 'https://randomuser.me/api/portraits/thumb/women/75.jpg'
                },
                {
                    name: 'Alexander Alvarez',
                    image: 'https://randomuser.me/api/portraits/thumb/women/25.jpg'
                },
                {
                    name: 'Paul Kenji',
                    image: 'https://randomuser.me/api/portraits/thumb/women/75.jpg'
                }
            ]
        }
    ]



export const EventDashBoard = () => {
    return (
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <EventList events={events} />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <DateCalendar />
                        <div className='new-group-btn'>
                            <Modal trigger={<Button color='green' size='large' >Start a new group</Button>}>
                                <Form />
                            </Modal>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </Container>
    )
}

export default EventDashBoard;
