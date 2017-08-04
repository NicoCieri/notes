import React, { Component } from 'react';
import { compose } from 'redux';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from '../constants/itemTypes';
import '../../style/note.css';

// class Note extends Component {
//   constructor(props) {
//     super(props);
//
//     // this.handleClick = this.handleClick.bind(this);
//   }
//
//   render() {
//     const { note, openNote, closeNote, top, left } = this.props;
//     const className = `note ${note.open ? 'open' : ''}`;
//
//     return (
//       <li className={className} style={ top, left }>
//         <div className="content" >
//           <div className="side front" onClick={() => openNote(note.id)}>
//             <p>{note.text}</p>
//           </div>
//           <div className="side back">
//             <span className='close-btn' onClick={() => closeNote(note.id)}>Close</span>
//           </div>
//         </div>
//       </li>
//     )
//   }
// }
//
// export default Note;

const Note = ({
  connectDragSource, connectDropTarget, note, openNote, closeNote, onMove, id
}) => {
  const className = `note ${note.open ? 'open' : ''}`;

  return compose(connectDragSource, connectDropTarget)(
    <li className={className}>
      <div className="content" >
        <div className="side front" onClick={() => openNote(note.id)}>
          <p>{note.text}</p>
        </div>
        <div className="side back">
          <span className='close-btn' onClick={() => closeNote(note.id)}>Close</span>
        </div>
      </div>
    </li>
  );
};

const noteSource = {
  beginDrag(props) {
    return {
      id: props.id
    }
  }
};

const noteTarget = {
  hover(targetProps, monitor) {
    const targetId = targetProps.id;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;

    if(sourceId !== targetId)
      targetProps.onMove({ sourceId, targetId })

    console.log('dragging note', sourceProps, targetProps)
  }
}

// export default compose(ItemTypes.NOTE, noteSource, connect => ({
//   connectDragSource: connect.dragSource()
// }))(Note)

export default compose(
  DragSource(ItemTypes.NOTE, noteSource, connect => ({
    connectDragSource: connect.dragSource()
  })),
  DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))
)(Note)
