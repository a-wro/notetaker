import React, { Component } from 'react';
import NoteForm from './containers/noteForm'
import NoteList from './containers/noteList'
import NoteDetail from './containers/noteDetail'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
          <NoteList />
          </div>
          <div className="col">
          <NoteForm />
          <NoteDetail />
        </div>
    </div>
    </div>
    );
  }
}

export default App;
