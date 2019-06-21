import React, { Component } from 'react';

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
      organization: '',
      position: '',
      duration: '',
      description: ''
    });
  }

  render () {
    return (
      <div className="container col-lg-8 mx-auto text-center">
        <div className="shadow border-0 card animated fadeInLeft">
          <div className="card-body">
            <h3 className="card-title">Work Experience</h3>
            <hr/>
          </div>
          <form>

            <div className="row col-lg-10 mx-auto">
              <div className="col-lg-4 text-left">
                <label>Organization*</label>
                <input
                  ref={ this.textInput }
                  className="form-control"
                  name="organization"
                  type="text"
                  placeholder="Organization"
                  value={this.state.organization}
                  onChange={(event) => this.inputChangedHandler(event)} />
              </div>
              <div className="col-lg-4 text-left">
                <label>Postion*</label>
                <input
                  className="form-control"
                  name="position"
                  type="text"
                  placeholder="Position"
                  value={this.state.position}
                  onChange={(event) => this.inputChangedHandler(event)}/>
              </div>

              <div className="col-lg-4 text-left">
                <label>Duration*</label>
                <input
                  className="form-control"
                  name="duration"
                  type="text"
                  placeholder="Duration"
                  value={this.state.duration}
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
            <button className="btn-info" onClick={this.props.previousPage}>Back</button>
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

export default ExperienceForm;
