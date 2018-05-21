import React from 'react'
import { reduxForm, Field } from 'redux-form'

class EditForm extends React.Component {
    componentWillMount() {
        this.props.initialize({
            edit: this.props.data
        })
    }

    render() { 
        const { handleSubmit, onSubmit } = this.props
        return (
            <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
                <Field 
                    name="edit"
                    className="form-control"
                    component="textarea" 
                />
                
                <button type="submit" className="btn btn-primary"> Save </button>
            </form>
        )
    }
}
EditForm = reduxForm({
    form: 'edit',
})(EditForm)

export default EditForm