import React, { Component } from 'react';
import { Field, reduxForm  } from 'redux-form';


class MiscForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbies: '',
      achievements: ''
    }

    this.formIdentifier = this.constructor.name;
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.focusTextInput();
  }

  focusTextInput = () => {
    //this.textInput.current.focus();
  }

  inputChangedHandler = (event,values) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmitHandler = (values) => {
    this.props.onSubmit(values, this.formIdentifier);
  }

  renderInput = ({input, meta, ...custom})  => {
    return (
      <div className="col-lg-6 text-left">
        <label>{custom.label}*</label>
        <input
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
            <h3 className="card-title">Misc</h3>
            <hr/>
          </div>
          <form onSubmit={handleSubmit(this.onSubmitHandler)}>

            <div className="row col-lg-10 mx-auto">
                <Field
                  name="hobbies"
                  label="Hobbies"
                  component={this.renderInput}
                  type="text"
                  className="form-control"
                  placeholder="Hobbies"/>

                <Field
                  className="form-control"
                  name="achievements"
                  type="text"
                  component={this.renderInput}
                  label="Achievements"
                  placeholder="achievements"
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

const validate = values  => {
  const errors = {};

  if(!values.hobbies) {
    errors.hobbies = 'required';
  }

  if(!values.achievements) {
    errors.achievements = 'required';
  }

  return errors;
}

MiscForm = reduxForm({
  form: 'misc',
  validate,
  destroyOnUnmount: false
})(MiscForm)


export default MiscForm;
