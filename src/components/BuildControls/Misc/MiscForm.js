import React, { Component } from 'react';

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
      hobbies: '',
      achievements: ''
    });
  }

  render () {
    return(



      <div className="container col-lg-8 mx-auto text-center">
        <div className="shadow border-0 card animated fadeInLeft">
          <div className="card-body">
            <h3 className="card-title">Misc</h3>
            <hr/>
          </div>
          <form>

            <div className="row col-lg-10 mx-auto">
              <div className="col-lg-6 text-left">
                <label>Hobbies*</label>
                <input
                  ref={ this.textInput }
                  className="form-control"
                  name="hobbies"
                  type="text"
                  placeholder="Hobbies"
                  value={this.state.hobbies}
                  onChange={(event) => this.inputChangedHandler(event)} />
              </div>
              <div className="col-lg-6 text-left">
                <label>Achievements</label>
                <input
                  className="form-control"
                  name="achievements"
                  type="text"
                  placeholder="achievements"
                  value={this.state.achievements}
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

export default MiscForm;
