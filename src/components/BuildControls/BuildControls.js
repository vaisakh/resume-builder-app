import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

import PersonalDetailsForm from './PersonalDetails/PersonalDetailsForm';
import ExperienceForm from './Experience/ExperienceForm';
import EducationForm from './Education/EducationForm';
import ProjectsForm from './Projects/ProjectsForm';
import MiscForm from './Misc/MiscForm';
import Success from './Success/Success';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newPerson } from '../../actions/personalInfoActions';
import { newWork } from '../../actions/workInfoActions';
import { newEducation } from '../../actions/educationInfoActions';
import { newProject } from '../../actions/projectInfoActions';
import { newMisc } from '../../actions/miscInfoActions';



class BuildControls extends Component {
  state = {
    page: 1,
  }

  componentDidMount() {
    //this.refEl.focus();
  }
  componentWillMount() {
    console.log( this.props.state)
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
    switch ( formIdentifier ) {
      case 'PersonalDetailsForm':
        this.props.newPerson(formElements);
        break;
      case 'EducationForm':
        this.props.newEducation(formElements);
        break;
      case 'ExperienceForm':
        this.props.newWork(formElements);
        break;
      case 'ProjectsForm':
        this.props.newProject(formElements);
        break;
      case 'MiscForm':
        this.props.newMisc(formElements);
        break;
      default:
        break;
    }

    const page = this.state.page;
    this.setState({ page: page + 1 });
  }

  render () {

    const page = this.state.page;
    let wizardForm = null;

    switch(page) {
      case 1: (
        wizardForm = <PersonalDetailsForm
          onSubmit={(formElements, formIdentifier) => this.onSubmitHandler(formElements, formIdentifier)}
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
}


BuildControls.propTypes = {
  newPerson: PropTypes.func.isRequired,
  newWork: PropTypes.func.isRequired,
  newEducation: PropTypes.func.isRequired,
  newProject: PropTypes.func.isRequired,
  newMisc: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  state: state
})

export default connect(mapStateToProps, {newPerson, newWork, newEducation, newProject, newMisc})(BuildControls);
