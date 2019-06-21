import React, { Component } from 'react';

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
    this.textInput.current.focus();
  }

  componentDidMount() {
    this.focusTextInput();
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
      title: '',
      link: '',
      description: ''
    });
  }

  render () {
    return(

      <div className="container col-lg-8 mx-auto text-center">
        <div className="shadow border-0 card animated fadeInLeft">
          <div className="card-body">
            <h3 className="card-title">Projects Info</h3>
            <hr/>
          </div>
          <form>

            <div className="row col-lg-10 mx-auto">
              <div className="col-lg-6 text-left">
                <label>Title*</label>
                <input
                  ref={ this.textInput }
                  className="form-control"
                  name="title"
                  type="text"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={(event) => this.inputChangedHandler(event)} />
              </div>
              <div className="col-lg-6 text-left">
                <label>Link</label>
                <input
                  className="form-control"
                  name="link"
                  type="text"
                  placeholder="Link"
                  value={this.state.link}
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

export default ProjectsForm;
