import { combineReducers } from 'redux'
import eventReducers from '../features/event/EventDashBoard/eventReducer'

const rootReducer = combineReducers({
    events: eventReducers
})

export default rootReducer