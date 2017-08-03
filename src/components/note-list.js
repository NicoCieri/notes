import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './note';

class NoteList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const notes = this.props.notes.map(note => <Note note={note} />);

    return (
      <ul className="note-list">
        {notes}
      </ul>
    )
  }
}

function mapStateToProps({ notes }) {
  return { notes }
}

export default connect(mapStateToProps, null)(NoteList);
