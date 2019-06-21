import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

import PersonalDetailsForm from './PersonalDetails/PersonalDetailsForm';
import ExperienceForm from './Experience/ExperienceForm';
import EducationForm from './Education/EducationForm';
import ProjectsForm from './Projects/ProjectsForm';
import MiscForm from './Misc/MiscForm';
import Success from './Success/Success';


class BuildControls extends Component {
  state = {
    page: 1,
    formElements: {
    },
    PersonalDetailsForm: {}
  }

  componentDidMount() {
    //this.refEl.focus();
  }

  nextPageHandler = (event) => {
    const page = this.state.page;
    this.setState({page: page + 1});
  }

  previousPageHandler = (event) => {
    const page = this.state.page;
    this.setState({page: page - 1});
  }

  onSubmitHandler = (formElements, formIdentifier) => {
    console.log('[App Component] ->', formIdentifier, formElements);
    const page = this.state.page;
    this.setState({ formIdentifier: formElements })
    this.setState({ page: page + 1 });
  }

  render () {

    const page = this.state.page;
    let wizardForm = null;

    switch(page) {
      case 1: (
        wizardForm = <PersonalDetailsForm
          onSubmit={(formElements, formIdentifier) =>
              this.onSubmitHandler(formElements, formIdentifier)}
        />
      );
        break;
      case 2: (
        wizardForm = <ExperienceForm
          onSubmit={(formElements, formIdentifier) =>
              this.onSubmitHandler(formElements, formIdentifier)}
          previousPage={this.previousPageHandler}
        />
      );
        break;
      case 3: (
        wizardForm = <EducationForm
          onSubmit={(formElements, formIdentifier) =>
              this.onSubmitHandler(formElements, formIdentifier)}
          previousPage={this.previousPageHandler}
          />
          );
        break;
        case 4: (
          wizardForm = <ProjectsForm
            onSubmit={(formElements, formIdentifier) =>
                this.onSubmitHandler(formElements, formIdentifier)}
          previousPage={this.previousPageHandler}
          />
      );
        break;
      case 5: (
        wizardForm = <MiscForm
          onSubmit={(formElements, formIdentifier) =>
              this.onSubmitHandler(formElements, formIdentifier)}
          previousPage={this.previousPageHandler}
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
