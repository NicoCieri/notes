import React, { Component } from 'react';

import NotesForm from './notes-form';
import NoteList from './note-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <NotesForm />
        <NoteList />
      </div>
    );
  }
}
