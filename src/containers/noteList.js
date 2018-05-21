import React from 'react'
import { connect } from 'react-redux'
import { deleteNote, filterNotes, viewDetail } from '../actions'
import SearchBar from '../components/searchbar'

class NoteList extends React.Component {

    submit(e) {
        this.props.filterNotes(e.term)
        
    }

    renderNotes() {
        return this.props.notes.map((note, id) => {
            const slice = note.note.slice(0,15)
            return (
                <li onClick={() => this.props.viewDetail(id)} className="list-group-item" key={id}>
                    {slice.length === 15 ? slice + '...' : slice}
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <SearchBar 
                    onSubmit={this.submit.bind(this)} 
                />
                <ul className="list-group">
                {this.renderNotes()}
                </ul>
            </div>
        )
    }
}

const getFilteredNotes = (notes, filter) => {
    if (filter === '') {
        return notes   
    }
    return notes.filter(note => note.note.includes(filter))
}

const mapStateToProps = state => {
    return {
        notes: getFilteredNotes(state.notes, state.filter),
    }
}

export default connect(mapStateToProps, { deleteNote, filterNotes, viewDetail })(NoteList)