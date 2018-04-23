import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
  // this function doesn't make much sense to me but it works
  renderField(field) {

    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {/* this will receive errors from function validate */}
        {/* if user has touched the field than check and run the
          errors, else run the empty string */}
          <div className="text-help">
            {field.meta.touched ? field.meta.error : ''}
          </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    // this is being past to the component from ReduxForm
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  //validate the inputs from 'values'
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters long!";
  }
  if (!values.categories) {
    errors.categories = "Enter categories!";
  }
  if (!values.content) {
    errors.content = "Enter some content!";
  }

  //if errors is empty than the form is ready to be submitted
  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm',
})(PostsNew);
