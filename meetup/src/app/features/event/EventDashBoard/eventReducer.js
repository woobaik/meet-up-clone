
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from './eventConstants'


const initialState =
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


const eventReducers = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_EVENT:
            return [...state, action.payload]
        case DELETE_EVENT:
            return [...state.filter(event => event.id !== action.payload.id)]
        case UPDATE_EVENT:
            return [...state.filter(event => event.id !== action.payload.id), action.payload]

        default: return state
    }
}



export default eventReducers