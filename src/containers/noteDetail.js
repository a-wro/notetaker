import React from 'react'
import { connect } from 'react-redux'
import { deleteNote, editNote } from '../actions'
import EditForm from '../components/editForm'

const DISPLAY = 'display'
const EDIT = 'edit'

class NoteDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: DISPLAY
        }
    }

    submitEdit(e) {
        const newNote = e.edit, { id } = this.props
        this.props.editNote(id, newNote)
        this.setState({
            mode: DISPLAY
        })
    }

    renderHelper() {
        switch(this.state.mode) {
            case DISPLAY:
                return this.showDetail()
            case EDIT:
                return this.showEditForm()
            default:
                return
        }
    }

    showEditForm() {
        return (
            <EditForm 
             data={this.props.note.note} 
             onSubmit={this.submitEdit.bind(this)}
        />
      )
    }

    showDetail() {
        const { id, note, deleteNote } = this.props
        return (
            <div className="narrow">
                <div> {note.note} </div>
                <div> {note.date.toUTCString()} </div>
                <img 
                    src={require('../images/delete.png')}
                    onClick={() => deleteNote(id)}
                    alt=''
                />

                <img 
                    src={require('../images/edit.png')}
                    onClick={() => this.setState({mode: EDIT})}
                    alt=''
                />
            </div>
        )
    }

    render() {
        return (
            <div>
               { this.props.note ? this.renderHelper() : '' }
            </div>
        )
    }
}
 
const mapStateToProps = state => {
    return {
        id: state.detail,
        note: state.notes[state.detail],
    }
}

export default connect(mapStateToProps, { deleteNote, editNote })(NoteDetail)