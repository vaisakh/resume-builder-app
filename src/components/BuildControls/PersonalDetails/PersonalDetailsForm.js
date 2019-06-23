import React, { Component } from 'react';

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
    this.focusTextInput();
  }

  focusTextInput = () => {
    this.textInput.current.focus();
  }

  inputChangedHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state, this.formIdentifier);
    this.setState({
      name: '',
      email: '',
      phone: '',
      address: '',
      skills: ''
    });
  }

  render () {
    return(

      <div className="container col-lg-8 mx-auto text-center">
        <div className="shadow border-0 card animated fadeInLeft">
          <div className="card-body">
            <h3 className="card-title">Personal Info</h3>
            <hr/>
          </div>
          <form>

            <div className="row col-lg-10 mx-auto">
              <div className="col-lg-4 text-left">
                <label>Name*</label>
                <input
                  ref={this.textInput}
                  className="form-control"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={(event) => this.inputChangedHandler(event)} />
              </div>
              <div className="col-lg-4 text-left">
                <label>Email*</label>
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={(event) => this.inputChangedHandler(event)}/>
              </div>

              <div className="col-lg-4 text-left">
                <label>Phone*</label>
                <input
                  className="form-control"
                  name="phone"
                  type="number"
                  placeholder="Phone"
                  value={this.state.phone}
                  onChange={(event) => this.inputChangedHandler(event)}/>
              </div>
            </div>
            <br />

            <div className="row col-lg-10 mx-auto">
              <div className="col-lg-12 text-left">
                <label>Address*</label>
                <textarea
                  className="form-control"
                  id="address"
                  name="address"
                  cols="30" rows="5"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={(event) => this.inputChangedHandler(event)}>
              </textarea>
            </div>
          </div>
          <br />

          <div className="row col-lg-10 mx-auto">
            <div className="col-lg-12 text-left">
              <label>Skills*</label>
              <input
                className="form-control"
                name="skills"
                type="text"
                placeholder="Skills"
                value={this.state.skills}
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

export default PersonalDetailsForm;
