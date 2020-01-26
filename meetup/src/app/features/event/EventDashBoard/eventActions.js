import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from './eventConstants'

export const create_event = (event) => {
    return {
        type: CREATE_EVENT,
        payload: { event }
    }
}

export const delete_event = (eventId) => {
    return {
        type: DELETE_EVENT,
        payload: { eventId }
    }
}

export const update_event = (event) => {
    return {
        type: UPDATE_EVENT,
        payload: { event }
    }
}


