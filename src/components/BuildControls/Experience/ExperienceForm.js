import React, { Component } from 'react';
import { Field, reduxForm  } from 'redux-form';


class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: '',
      position: '',
      duration: '',
      description: ''
    }

    this.formIdentifier = this.constructor.name;
    this.textInput = React.createRef();
  }

  componentDidMount() {
    //this.focusTextInput();
  }

  focusTextInput = () => {
    //this.textInput.current.focus();
  }

  inputChangedHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmitHandler = (values) => {
    this.props.onSubmit(values, this.formIdentifier);
  }

  renderInput = ({ input, meta, ...custom }) => {
    return(
      <div className={custom.wrapperclassname}>
        <label>{custom.label}*</label>
        <input
          {...input}
          {...custom}
        />
            { meta.error && meta.touched && <span className="form-text text-muted">{meta.error}</span> }
          </div>
    )
  }

  renderTextArea = ({ input, meta, ...custom }) => {
    return(
      <div className={custom.wrapperclassname}>
        <label>{custom.label}*</label>
        <textarea
          {...input}
          {...custom}
        />
            { meta.error && meta.touched && <span className="form-text text-muted">{meta.error}</span> }
          </div>
    )
  }


  render () {
    const { handleSubmit } = this.props;

    return (
      <div className="container col-lg-8 mx-auto text-center">
        <div className="shadow border-0 card animated fadeInLeft">
          <div className="card-body">
            <h3 className="card-title">Work Experience</h3>
            <hr/>
          </div>
          <form onSubmit={ handleSubmit(this.onSubmitHandler) }>

            <div className="row col-lg-10 mx-auto">
                <Field
                  className="form-control"
                  name="organization"
                  type="text"
                  placeholder="Organization"
                  label="Organization"
                  component={this.renderInput}
                  wrapperclassname="col-lg-4 text-left"
                />
                <Field
                  className="form-control"
                  name="position"
                  type="text"
                  placeholder="Position"
                  label="Position"
                  component={this.renderInput}
                  wrapperclassname="col-lg-4 text-left"
               />

                <Field
                  className="form-control"
                  name="duration"
                  type="text"
                  placeholder="Duration"
                  label="Duration"
                  component={this.renderInput}
                  wrapperclassname="col-lg-4 text-left"
                />
            </div>
            <br />

            <div className="row col-lg-10 mx-auto">
                <Field
                  className="form-control"
                  name="description"
                  type="text"
                  placeholder="Description"
                  label="Description"
                  component={this.renderTextArea}
                  wrapperclassname="col-lg-12 text-left"
                />
          </div>
          <br />

          <div className="container text-center">
            <button className="btn-info" onClick={this.props.previousPage}>Back</button>
            <button type="submit" className="btn-info">Next</button>
          </div>
          <br />
        </form>
      </div>

      <br />
      <br />
    </div>
    );
  }
}

const validate = values => {
  const errors = {};

  if(!values.organization) {
    errors.organization = 'required';
  }

  if(!values.position) {
    errors.position = 'required';
  }

  if(!values.duration) {
    errors.duration = 'required';
  }

  if(!values.description) {
    errors.description = 'required';
  }

  return errors;
}

ExperienceForm = reduxForm({
  form: 'experience',
  validate,
  destroyOnUnmount: false
})(ExperienceForm)

export default ExperienceForm;
