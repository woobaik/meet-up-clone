import React, { Fragment } from 'react'
import { Form, Checkbox, Button, Modal } from 'semantic-ui-react'
import Calendar from 'react-calendar'

const EventForm = () => {
    return (
        <Fragment>
            <Modal.Header>START YOUR NEW EVENT</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Form>
                        <Form.Field>
                            <label>Host</label>
                            <input placeholder='Host' name='hostBy' />
                        </Form.Field>
                        <Form.Field>
                            <label>Title</label>
                            <input placeholder='Title' name='title' />
                        </Form.Field>
                        <Form.Field>
                            <Calendar />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox label='I agree to the Terms and Conditions' />
                        </Form.Field>

                        <Button type='submit'>Submit</Button>
                    </Form>
                </Modal.Description>
            </Modal.Content>
        </Fragment>

    )
}


export default EventForm

