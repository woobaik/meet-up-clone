import React, { Fragment } from 'react';
import { Grid, Container, Button } from 'semantic-ui-react';
import { EventList } from './EventList'
import DateCalendar from './calendar'
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
                            <Button color='green' size='large'>Start a new group</Button>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default EventDashBoard;
