import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

import PersonalDetails from './PersonalDetails/PersonalDetails';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Projects from './Projects/Projects';
import Misc from './Misc/Misc';
import Success from './Success/Success';


class BuildControls extends Component {
  state = {
    page: 1,
    formElements: {
    },
  }

  componentDidMount() {
    //this.refEl.focus();
  }

  formSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({page: this.state.page+1});
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.formElements
    };

    const identifierElement = {
      ...updatedForm[inputIdentifier][inputIdentifier]
    };
    console.log(updatedForm[inputIdentifier][inputIdentifier]);

    const updatedFormElement = {
      ...identifierElement[event.target.name]
    };

    updatedFormElement.value = event.target.value;
    updatedForm[inputIdentifier][inputIdentifier][event.target.name] = updatedFormElement;
    this.setState({formElements: updatedForm});
  }

  nextPageHandler = (event) => {
    const page = this.state.page;
    this.setState({page: page + 1});
  }

  previousPageHandler = (event) => {
    const page = this.state.page;
    this.setState({page: page - 1});
  }


  render () {

    const page = this.state.page;
    let wizardForm = null;

    switch(page) {
      case 1: return(
        wizardForm = <PersonalDetails
          formSubmit={this.formSubmitHandler}
          nextPage={this.nextPageHandler}
        />
      );
        break;
      case 2: (
        wizardForm = <Experience
          formSubmit={this.formSubmitHandler}
          prevPage={this.previousPageHandler}
          nextPage={this.nextPageHandler}
        />
      );
        break;
      case 3: (
        wizardForm = <Education
          formSubmit={this.formSubmitHandler}
          prevPage={this.previousPageHandler}
          nextPage={this.nextPageHandler}
        />
      );
        break;
        case 4: (
        wizardForm = <Projects
          formSubmit={this.formSubmitHandler}
          prevPage={this.previousPageHandler}
          nextPage={this.nextPageHandler}
        />
      );
        break;
        case 5: (
        wizardForm = <Misc
          formSubmit={this.formSubmitHandler}
          prevPage={this.previousPageHandler}
          nextPage={this.nextPageHandler}
        />
      );
        break;
      case 6: (
        wizardForm = <Success/>
      )
        break;
        default:

    }

    return(
      <Aux>
      {wizardForm }
      </Aux>
    );
  }
};

export default BuildControls;
