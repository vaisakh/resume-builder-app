import React, { Component } from 'react';
import { Field, reduxForm  } from 'redux-form';


class PersonalDetailsForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      skills: ''
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
    });
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
    return(

      <div className="container col-lg-8 mx-auto text-center">
        <div className="shadow border-0 card animated fadeInLeft">
          <div className="card-body">
            <h3 className="card-title">Personal Info</h3>
            <hr/>
          </div>
          <form onSubmit={ handleSubmit(this.onSubmitHandler) }>

            <div className="row col-lg-10 mx-auto">
                <Field
                  className="form-control"
                  name="name"
                  type="text"
                  placeholder="Name"
                  component={this.renderInput}
                  label="Name"
                  wrapperclassname="col-lg-4 text-left"
                />
                <Field
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder="Email"
                  label="Email"
                  component={this.renderInput}
                  wrapperclassname="col-lg-4 text-left"
                />

                <Field
                  className="form-control"
                  name="phone"
                  type="number"
                  label="Phone"
                  placeholder="Phone"
                  component={this.renderInput}
                  wrapperclassname="col-lg-4 text-left"
                />
            </div>
            <br />

            <div className="row col-lg-10 mx-auto">
                <Field
                  className="form-control"
                  id="address"
                  name="address"
                  cols="30" rows="5"
                  placeholder="Address"
                  label="Address"
                  component={this.renderTextArea}
                  wrapperclassname="col-lg-12 text-left"
                />
          </div>

          <div className="row col-lg-10 mx-auto">
            <Field
              className="form-control"
              name="skills"
              type="text"
              label="Skills"
              placeholder="Skills"
              component={this.renderInput}
              wrapperclassname="col-lg-12 text-left"
            />
            </div>
            <br />

          <div className="container text-center">
            <button type="submit" className="btn-info" >Next</button>
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

  if(!values.name) {
    errors.name = 'required';
  }

  if(!values.email) {
    errors.email = 'required';
  }

  if(!values.phone) {
    errors.phone = 'required';
  }

  if(!values.address) {
    errors.address = 'required';
  }

  if(!values.skills) {
    errors.skills = 'required';
  }

  return errors;
}

PersonalDetailsForm = reduxForm({
  form: 'personal',
  validate,
  destroyOnUnmount: false
})(PersonalDetailsForm)

export default PersonalDetailsForm;
