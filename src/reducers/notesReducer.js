import * as ActionTypes from '../actions/actionTypes'

const initialState = [];

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_NOTE:
      return [ ...state, {
        ...action.payload,
        id: state.reduce((maxId, note) => Math.max(note.id, maxId), 0) +1
        }
      ]
    case ActionTypes.OPEN_NOTE:
      return state.map((note) => note.id === action.payload.id ? { ...note, open: true } : note )
    case ActionTypes.CLOSE_NOTE:
      return state.map((note) => note.id === action.payload.id ? { ...note, open: false } : note )
    case ActionTypes.UPDATE_POSITION:
      return state.map((note) => note.id === action.payload.id ? {
        ...note,
        x: note.x + action.payload.x,
        y: note.y + action.payload.y
      } : note )
    default:
      return state;
  }
}
