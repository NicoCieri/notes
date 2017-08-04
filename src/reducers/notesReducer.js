import * as ActionTypes from '../actions/actionTypes'

const initialState = [];

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_NOTE:
      return [ ...state, {
        ...action.payload.note,
        open: false,
        id: state.reduce((maxId, note) => Math.max(note.id, maxId), 0) +1
        }
      ]
    case ActionTypes.OPEN_NOTE:
      return state.map((note) => note.id === action.payload.id ? { ...note, open: true } : note )
    case ActionTypes.CLOSE_NOTE:
      console.log(action);
      return state.map((note) => note.id === action.payload.id ? { ...note, open: false } : note )
    case ActionTypes.UPDATE_POSITION:
      return state.map((note) => note.id === action.payload.id ? { ...note, open: true } : note )
    case ActionTypes.CLOSE_ALL_NOTES:
      return state.map((note) => ({ ...note, open: false }) )
    default:
      return state;
  }
}
