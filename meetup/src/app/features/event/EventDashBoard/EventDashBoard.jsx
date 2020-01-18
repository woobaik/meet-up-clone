import React, { Fragment } from 'react';
import { Grid, Container, Button, Modal } from 'semantic-ui-react';
import { EventList } from './EventList'
import DateCalendar from './calendar'
import Form from './EventForm'
import './EventDashBoard.css'

export const EventDashBoard = () => {
    return (
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <EventList />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <DateCalendar />
                        <div className='new-group-btn'>
                            <Modal trigger={<Button color='green' size='large' fluid>Start a new group</Button>}>
                                <Form />
                            </Modal>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Form />
        </Container>
    )
}

export default EventDashBoard;
