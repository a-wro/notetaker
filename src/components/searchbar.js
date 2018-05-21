import React from 'react'
import { Field, reduxForm } from 'redux-form'

let SearchBar = props => {
    const { handleSubmit, onSubmit } = props
    return (
        <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
            <Field 
                name="term" 
                className="form-control" 
                component="input" 
                placeholder="All Notes..."
            />
        </form>
    )
}

SearchBar = reduxForm({
    form: 'search'
})(SearchBar)

export default SearchBar


