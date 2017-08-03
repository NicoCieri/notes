import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import notesReducer from './notesReducer';

const rootReducer = combineReducers({
  notes: notesReducer,
  form: formReducer
});

export default rootReducer;
