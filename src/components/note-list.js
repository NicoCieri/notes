import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Note from './note';
import { openNote, closeNote } from '../actions';
import Draggable from 'react-draggable';

class NoteList extends Component {
  constructor(props) {
    super(props);

    // this.handleClick = this.handleClick.bind(this);
  }

  handleNoteClick(id) {
    this.props.openNote(id)
  }

  render() {
    const notes = this.props.notes.map(note => (
      <Note
        key={note.id}
        note={note}
        openNote={this.props.openNote}
        closeNote={this.props.closeNote}
      />
    ));

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

// export default connect(mapStateToProps, { openNote, closeNote })(NoteList);
export default compose(
  DragDropContext(HTML5Backend),
  connect(
    mapStateToProps,
    { openNote, closeNote }
  )
)(NoteList)
