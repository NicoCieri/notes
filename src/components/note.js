import React, { Component } from 'react';
import '../../style/note.css';

class Note extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    const { note } = this.props;

    return (
      <li key={note.id} className="note">
        <div className="side front">
          <p>{note.text}</p>
        </div>
        <div className="side back"></div>
      </li>
    )
  }
}

export default Note;
