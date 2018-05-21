import { ADD_NOTE, DELETE_NOTE, FILTER_NOTES, VIEW_DETAIL, EDIT_NOTE } from '../actions'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const notesReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_NOTE:
            return [...state, action.payload]
        case DELETE_NOTE:
            return state.filter((_, id) => id !== action.id)
        case EDIT_NOTE:
            return state.map((elem, id) => {
                if (id === action.id)
                    return action.payload
                return elem
            })

        default:
             return state
    }
}

const filterReducer = (state = '', action) => {
    switch(action.type) {
        case FILTER_NOTES:
            if (!action.payload) //empty submit
                return '' //show all
            return action.payload
        default:
            return state
    }
}

const detailReducer = (state = null, action) => {
    switch(action.type) {
        case VIEW_DETAIL:   
            return action.id
        default:
            return state
    }
}

export default combineReducers({
    notes: notesReducer,
    filter: filterReducer,
    detail: detailReducer,
    form: formReducer,
})