import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { addNote } from '../actions'

const required = value => (value ? undefined : 'error')

class NoteForm extends React.Component {  
    
    submit(e) {
        this.props.addNote(e.text)
        this.props.reset()
    }
    
    render() {
        const { handleSubmit } = this.props
        return (
        <form className="form-group" onSubmit={handleSubmit(this.submit.bind(this))}>
          <Field 
            className="form-control" 
            name="text" 
            component="textarea" 
            validate={required}
            />
          <button 
            className="btn btn-primary"
            type="submit"> 
                Add
            </button>
        </form>
        )
    }
}

NoteForm = reduxForm({
    form: 'note'
})(NoteForm)

export default connect(null, { addNote })(NoteForm)