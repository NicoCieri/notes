import React, { Component } from 'react';
import { compose, connect } from 'redux';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

/**
 * Implements the drag source contract.
 */
const noteSource = {
  beginDrag({ note: {id} }) {
    return { id };
  },
  endDrag({updatePosition, note}, monitor) {
    const { x, y } = monitor.getDifferenceFromInitialOffset();
    updatePosition(note.id, x, y)
  }

};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const propTypes = {
  note: PropTypes.object.isRequired,
  openNote: PropTypes.func.isRequired,
  closeNote: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
};

class Note extends Component {
  render() {
    const { isDragging, connectDragSource, note, openNote, closeNote } = this.props;
    const className = `note ${note.open ? 'open' : ''}`;
    const pin = isDragging ? '' : <span className="pin"></span>;

    return connectDragSource(
      <li
        className={className}
        style={{
          opacity: isDragging ? 0.5 : 1,
          transform: `translate(${note.x}px, ${note.y}px)`
        }}
      >
        <div className="content" >
          <div className="side front" onClick={() => openNote(note.id)}>
            {pin}
            <p>{note.text}</p>
          </div>
          <div className="side back">
            <span className='close-btn' onClick={() => closeNote(note.id)}>Close</span>
            <p>{note.text}</p>
          </div>
        </div>
      </li>
    );
  }
}

Note.propTypes = propTypes;

// Export the wrapped component:
export default DragSource(ItemTypes.NOTE, noteSource, collect)(Note);
