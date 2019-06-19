import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

import PersonalDetails from './PersonalDetails/PersonalDetails';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Misc from './Misc/Misc';
import Success from './Success/Success';


class BuildControls extends Component {
  state = {
    page: 2,
    formElements: {
      personal: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            name: 'name',
            placeholder: 'Your Name',
            required: 'required'
          },
          value: ''
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            name: 'email',
            placeholder: 'name@example.com',
            required: 'required'
          },
          value: ''
        },
        phone: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            name: 'phone',
            placeholder: 'Your Phone',
            required: 'required'
          },
          value: ''
        },
        linkedin: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            name: 'linkedin',
            placeholder: 'Your Linkedin'
          },
          value: ''
        },
        github: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            name: 'github',
            placeholder: 'Your Github'
          },
          value: ''
        },
        skills: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            name: 'skills',
            placeholder: 'Your Skills'
          },
          value: ''
        }
      },
      experience: {
        organization: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            name: 'organization',
            placeholder: 'Organization'
          },
          value: ''
        },
        position: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            name: 'position',
            placeholder: 'Position'
          },
          value: ''
        },
        duration: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            name: 'duration',
            placeholder: 'Duration'
          },
          value: ''
        },
        description: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            name: 'description',
            placeholder: 'Description'
          },
          value: ''
        },
      },
      projects: {
        title: {
          elementType: 'input',
          elementConfig: {
          type: 'text',
          name: 'title',
          placeholder: 'Title'
          },
          value: ''
        },
          link: {
          elementType: 'input',
          elementConfig: {
          type: 'text',
          name: 'link',
          placeholder: 'Link'
          },
          value: ''
        },
          description: {
          elementType: 'input',
          elementConfig: {
          type: 'text',
          name: 'description',
          placeholder: 'Description'
          },
          value: ''
        },
      },
      education: {
          college: {
          elementType: 'input',
          elementConfig: {
          type: 'text',
          name: 'college',
          placeholder: 'College'
          },
          value: ''
        },
                year: {
          elementType: 'input',
          elementConfig: {
          type: 'text',
          name: 'year',
          placeholder: 'Year'
          },
          value: ''
        },
          qualification: {
          elementType: 'input',
          elementConfig: {
          type: 'text',
          name: 'qualification',
          placeholder: 'Qualification'
          },
          value: ''
        },
          description: {
          elementType: 'input',
          elementConfig: {
          type: 'text',
          name: 'description',
          placeholder: 'Description'
          },
          value: ''
        },
      },
      misc: {
          hobbies: {
          elementType: 'input',
          elementConfig: {
          type: 'text',
          name: 'hobbies',
          placeholder: 'Hobbies'
          },
          value: ''
        },
          achievements: {
          elementType: 'input',
          elementConfig: {
          type: 'text',
          name: 'achievements',
          placeholder: 'Achievements'
          },
          value: ''
        },
      }
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
    console.log('[InputChangedHandler]', event.target);
    const updatedForm = {
      ...this.state.formElements
    };

    const identifierElement = {
      ...updatedForm[inputIdentifier]
    };

    const updatedFormElement = {
      ...identifierElement[event.target.name]
    };
    updatedFormElement.value = event.target.value;
    updatedForm[inputIdentifier][event.target.name] = updatedFormElement;
    console.log(inputIdentifier);
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

  addInputElement = (event) => {
    event.preventDefault();
    alert("h")
  }

  render () {

    const page = this.state.page;
    let wizardForm = null;

    switch(page) {
      case 1: return(
        wizardForm = <PersonalDetails
          formElements={this.state.formElements.personal}
          inputChanged={(event) => this.inputChangedHandler(event, 'personal')}
          formSubmit={this.formSubmitHandler}
        />
      );
        break;
      case 2: (
        wizardForm = <Experience
          formElements={this.state.formElements.experience}
          inputChanged={(event) => this.inputChangedHandler(event, 'experience')}
          formSubmit={this.formSubmitHandler}
          prevPage={this.previousPageHandler}
          nextPage={this.nextPageHandler}
          addEl={this.addInputElement}
        />
      );
        break;
      case 3: (
        wizardForm = <Projects
          formElements={this.state.formElements.projects}
          inputChanged={(event) => this.inputChangedHandler(event, 'projects')}
          formSubmit={this.formSubmitHandler}
          prevPage={this.previousPageHandler}
          nextPage={this.nextPageHandler}
        />
      );
        break;
        case 4: (
        wizardForm = <Projects
          formElements={this.state.formElements.education}
          inputChanged={(event) => this.inputChangedHandler(event, 'education')}
          formSubmit={this.formSubmitHandler}
          prevPage={this.previousPageHandler}
          nextPage={this.nextPageHandler}
        />
      );
        break;
        case 5: (
        wizardForm = <Misc
          formElements={this.state.formElements.misc}
          inputChanged={(event) => this.inputChangedHandler(event, 'misc')}
          formSubmit={this.formSubmitHandler}
          prevPage={this.previousPageHandler}
          nextPage={this.nextPageHandler}
        />
      );
        break;
      case 6: (
        wizardForm = <Success/>
      )

    }

    return(
      <Aux>
      {wizardForm }
      </Aux>
    );
  }
};

export default BuildControls;
