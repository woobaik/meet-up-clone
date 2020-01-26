import React from 'react';
import { Grid, Container, Button, Modal } from 'semantic-ui-react';
import { EventList } from './EventList'
import DateCalendar from './calendar'
import Form from './EventForm'
import { connect } from 'react-redux'
import './EventDashBoard.css'

const mapState = (state) => ({
    events: state.events
})

const EventDashBoard = (props) => {
    console.log(props)
    return (
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <EventList events={props.events} />
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

export default connect(mapState)(EventDashBoard)
