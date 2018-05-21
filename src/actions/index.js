export const ADD_NOTE = 'add_note'
export const DELETE_NOTE = 'delete_note'
export const FILTER_NOTES = 'filter_notes'
export const VIEW_DETAIL = 'view_detail'
export const EDIT_NOTE = 'edit_note'

export const addNote = text => {
    return {
        type: ADD_NOTE,
        payload: { note: text, date: new Date() }
    }
}

export const deleteNote = id => {
    return {
        type: DELETE_NOTE,
        id: id,
    }
}

export const filterNotes = term => {
    return {
        type: FILTER_NOTES,
        payload: term,
    }
}

export const viewDetail = id => {
    return {
        type: VIEW_DETAIL,
        id: id,
    }
}   

export const editNote = (id, text) => {
    return {
        type: EDIT_NOTE,
        id: id,
        payload: { note: text, date: new Date() }
    }
}
