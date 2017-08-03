import * as actionTypes from './actionTypes';

export const addNote = (note) => {
  return {
    type: actionTypes.ADD_NOTE,
    payload: { note }
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
