import * as actionTypes from './actionTypes';

export const addNote = (note) => {
  return {
    type: actionTypes.ADD_NOTE,
    payload: { ...note, open: false, x: 0, y: 0 }
  }
}

export const openNote = (id) => {
  return {
    type: actionTypes.OPEN_NOTE,
    payload: { id }
  }
}

export const closeNote = (id) => {
  return {
    type: actionTypes.CLOSE_NOTE,
    payload: { id }
  }
}

export const closeAllNotes = () => {
  return {
    type: actionTypes.CLOSE_ALL_NOTES
  }
}

export const updatePosition = (id, x, y) => {
  return {
    type: actionTypes.UPDATE_POSITION,
    payload: { id, x, y }
  }
}
