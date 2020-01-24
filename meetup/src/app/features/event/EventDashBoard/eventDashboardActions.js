export const CreateEvent = (event) => {
    return {
        type: 'CREATE_EVENT',
        payload: { event }
    }
}

export const DeleteEvent = (eventId) => {
    return {
        type: 'DELETE_EVENT',
        payload: { eventId }
    }
}

export const UpdateEvent = (event) => {
    return {
        type: 'UPDATE_EVENT',
        payload: { event }
    }
}

