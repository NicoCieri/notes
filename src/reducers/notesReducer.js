import * as ActionTypes from ''

const initialState = [];

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return [ ...state, {
        ...action.payload.note,
        id: state.reduce((maxId, note) => Math.max(note.id, maxId), 1) +1
        }
      ]
    case 'OPEN_NOTE':
      return state.map((note) => note.id === action.payload.id ? { ...note, open: true } : note )
    case 'CLOSE_NOTE':
      return state.map((note) => note.id === action.payload.id ? { ...note, open: false } : note )
    default:
      return state;
  }
}
