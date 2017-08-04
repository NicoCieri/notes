import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { addNote } from '../actions';

class NotesForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-error' : ''}`;

    return (
      <div className={className}>
        <input
          className="form-control"
          type="text"
          autoComplete="off"
          {...field.input}
        />

      </div>
    )
  }

  onSubmit(text) {
    const { reset } = this.props;
    this.props.addNote(text, () => {
      console.log('submited');
    })
    reset()
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="notes-form">
        <div className="row">
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div className="col-sm-10">
              <Field
                name="text"
                component={this.renderField}
              />
            </div>
            <div className="col-sm-2">
              <button type="submit"className="btn">Add Note </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  // Validate input from value
  if (!values.text) errors.text = "Enter a text";

  return errors;
}

export default reduxForm({
  validate,
  form: 'NoteNewForm'
})(
  connect(null, { addNote })(NotesForm)
);
