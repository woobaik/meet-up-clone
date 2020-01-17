import React from 'react'
import { Modal, Form, Checkbox, Button } from 'semantic-ui-react'
import Calendar from 'react-calendar'

const EventForm = () => {
    return (
        <Form>
            <Form.Field>
                <label>Host</label>
                <input placeholder='Host' />
            </Form.Field>
            <Form.Field>
                <label>Title</label>
                <input placeholder='Title' />
            </Form.Field>
            <Form.Field>
                <label>Date</label>
                <input type='date' />
                <Calendar />
            </Form.Field>
            <Form.Field>
                <label>Date</label>
                <input type='date' />
                <Calendar />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>

            <Button type='submit'>Submit</Button>
        </Form>
    )
}


export default EventForm