import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
//import Input from '../../UserControls/Input/Input';


class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formElements: {
        education: {
          education1: {
            college1: { elementType: 'input', elementConfig: { type: 'text', name: 'college1', placeholder: 'College' }, value: '' },
            year1: { elementType: 'input', elementConfig: { type: 'text', name: 'year1', placeholder: 'Year' }, value: '' },
            qualification1: { elementType: 'input', elementConfig: { type: 'text', name: 'qualification1', placeholder: 'Qualification' }, value: '' },
            description1: { elementType: 'input', elementConfig: { type: 'text', name: 'description1', placeholder: 'Description' }, value: '' },
          }
        }
      }};
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.formElements
    };

    const updatedExperienceElEl = {
      ...updatedForm.education
    }

    const identifierElement = {
      ...updatedExperienceElEl[inputIdentifier]
    };

    const updatedFormElement = {
      ...identifierElement[event.target.name]
    };

    updatedFormElement.value = event.target.value;
    updatedExperienceElEl[inputIdentifier][event.target.name] = updatedFormElement;
    this.setState({formElements: updatedForm});
  }

  addEl = (event) => {
    event.preventDefault();
    const formElements = {
      ...this.state.formElements
    };

    let elKeys = Object.keys(formElements['education']);
    let lastKey = elKeys[elKeys.length - 1];
    let lastKeyIndex = parseInt(lastKey.charAt(lastKey.length - 1)) + 1;
    let newEl = {};

    newEl['college'+lastKeyIndex] = { elementType: 'input', elementConfig: { type: 'text', name: 'college'+lastKeyIndex, placeholder: 'College' }, value: ''  };
    newEl['year'+lastKeyIndex] = { elementType: 'input', elementConfig: { type: 'text', name: 'year'+lastKeyIndex, placeholder: 'Year' }, value: '' };
    newEl['qualification'+lastKeyIndex] = { elementType: 'input', elementConfig: { type: 'text', name: 'qualification'+lastKeyIndex, placeholder: 'Qualification' }, value: '' };
    newEl['description'+lastKeyIndex] = { elementType: 'input', elementConfig: { type: 'text', name: 'description'+lastKeyIndex, placeholder: 'Description' }, value: '' };

    formElements['education']['education'+lastKeyIndex] = newEl;
    this.setState({formElements: formElements});
  }

  render() {


    const formElementsObj = {};
    const formElementsArray = [];
    //const formElements = this.props.formElements;
    const formElements = this.state.formElements.education;

    for(let key in formElements) {
      let divider = 'divider' + key.charAt(key.length - 1);
      formElementsArray.push({id: divider, config: key.charAt(key.length - 1), identifier: ''});

      let formElement = formElements[key];
      for(let elkey in formElement) {
        formElementsArray.push({id: elkey, config: formElement[elkey], identifier: key});
      }
      formElementsObj[key] = formElementsArray;
    }


    return(
      <Aux>
        <div className="container col-lg-8 mx-auto text-center">
          <div className="shadow border-0 card animated fadeInLeft">
            <div className="card-body">
              <h3 className="card-title">Education</h3>
              <hr/>
            </div>
            <form onSubmit={this.props.formSubmit}>
                {
                  formElementsArray.map(formElement => (
                    <Aux key={formElement.id}>

                      <div className="row col-lg-10 mx-auto">
                          {formElement.id === 'divider'+formElement.config ?
                              <div className="col-lg-12 text-left pt-4">
                                <h3><b><i className="fas fa-check-circle mr-1"></i>{formElement.config}</b></h3><hr/>
                                </div>: <div className="col-lg-12 text-left">
                                <label></label>
                                <input
                                  className="form-control"
                                  key={formElement.id}
                                  type={formElement.config.elementConfig.elementType}
                                  name={formElement.id}
                                  placeholder={formElement.config.elementConfig.placeholder}
                                  value={formElement.config.value}
                                  onChange={(event) => this.inputChangedHandler(event, formElement.identifier)}/>
                              </div>
                          }
                            </div>
                          </Aux>
                  ))
                }
                          <br />
                          <div className="container text-center">
                            <button type="button" className="btn btn-info" onClick={this.props.prevPage}><i className="fas fa-angle-left mr-1"></i>Back</button>
                            <button type="submit" className="btn btn-info" onClick={this.props.nextPage}>Next<i className="fas fa-angle-right ml-1"></i></button>
                            <button className="btn btn-info" onClick={this.addEl}><i className="fas fa-plus ml-1"></i></button>
                          </div>
                          <br/>
                        </form>
                      </div>
                    </div>
                    <br/>
                  </Aux>

    );
  }

}

export default Education;
