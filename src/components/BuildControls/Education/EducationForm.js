import React, { Component } from 'react';

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      college: '',
      year: '',
      qualification: '',
      description: ''
    }

    this.formIdentifier = this.constructor.name;
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.focusTextInput();
  }

  focusTextInput = () => {
    this.textInput.current.focus();
  }

  inputChangedHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state, this.formIdentifier);
    this.setState({
      college: '',
      year: '',
      qualification: '',
      description: ''
    });
  }

  render () {
    return(

      <div className="container col-lg-8 mx-auto text-center">
        <div className="shadow border-0 card animated fadeInLeft">
          <div className="card-body">
            <h3 className="card-title">Education Info</h3>
            <hr/>
          </div>
          <form>

            <div className="row col-lg-10 mx-auto">
              <div className="col-lg-4 text-left">
                <label>College/University*</label>
                <input
                  ref={ this.textInput }
                  className="form-control"
                  name="college"
                  type="text"
                  placeholder="College"
                  value={this.state.college}
                  onChange={(event) => this.inputChangedHandler(event)} />
              </div>
              <div className="col-lg-4 text-left">
                <label>Year*</label>
                <input
                  className="form-control"
                  name="year"
                  type="text"
                  placeholder="Year"
                  value={this.state.year}
                  onChange={(event) => this.inputChangedHandler(event)}/>
              </div>

              <div className="col-lg-4 text-left">
                <label>Qualification*</label>
                <input
                  className="form-control"
                  name="qualification"
                  type="text"
                  placeholder="Qualification"
                  value={this.state.qualification}
                  onChange={(event) => this.inputChangedHandler(event)}/>
              </div>
            </div>
            <br />

            <div className="row col-lg-10 mx-auto">
              <div className="col-lg-12 text-left">
                <label>Description*</label>
                <input
                  className="form-control"
                  name="description"
                  type="text"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={(event) => this.inputChangedHandler(event)}/>
              </div>
            </div>
            <br />

            <div className="container text-center">
              <button className="btn-info" onClick={(event) => this.onSubmitHandler(event)}>Next</button>
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

export default EducationForm;
