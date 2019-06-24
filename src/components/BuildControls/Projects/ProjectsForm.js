import React, { Component } from 'react';
import { Field, reduxForm  } from 'redux-form';


class ProjectsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      link: '',
      description: ''
    }

    this.formIdentifier = this.constructor.name;
    this.textInput = React.createRef();
  }

  focusTextInput = () => {
    //this.textInput.current.focus();
  }

  componentDidMount() {
    //this.focusTextInput();
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

    return(

      <div className="container col-lg-8 mx-auto text-center">
        <div className="shadow border-0 card animated fadeInLeft">
          <div className="card-body">
            <h3 className="card-title">Projects Info</h3>
            <hr/>
          </div>
          <form onSubmit={ handleSubmit(this.onSubmitHandler) }>

            <div className="row col-lg-10 mx-auto">
                <Field
                  className="form-control"
                  name="title"
                  type="text"
                  placeholder="Title"
                  label="Title"
                  component={this.renderInput}
                  wrapperclassname="col-lg-6 text-left"
                />

                <Field
                  className="form-control"
                  name="link"
                  type="text"
                  placeholder="Link"
                  label="Link"
                  component={this.renderInput}
                  wrapperclassname="col-lg-6 text-left"
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

  if(!values.title) {
    errors.title = 'required';
  }

  //if(!values.link) {
    //errors.link = 'required';
  //}

  if(!values.description) {
    errors.description = 'required';
  }

  return errors;
}

ProjectsForm = reduxForm({
  form: 'project',
  validate,
  destroyOnUnmount: false
})(ProjectsForm)


export default ProjectsForm;
