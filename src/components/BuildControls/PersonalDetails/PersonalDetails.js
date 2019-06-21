import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
//import Input from '../../UserControls/Input/Input';

class PersonalDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
    formElements: {
      personal: {
        personal1: {
          name1: { elementType: 'input', elementConfig: { type: 'text', name: 'name1', placeholder: 'Your Name', required: 'required' }, value: '' },
          email1: { elementType: 'input', elementConfig: { type: 'email', name: 'email1', placeholder: 'name@example.com', required: 'required' }, value: '' },
          phone1: { elementType: 'input', elementConfig: { type: 'text', name: 'phone1', placeholder: 'Your Phone', required: 'required' }, value: '' },
          address1: { elementType: 'textarea', elementConfig: { type: 'text', name: 'address1', placeholder: 'Your Address', required: 'required' }, value: '' },
          skills1: { elementType: 'input', elementConfig: { type: 'text', name: 'skills1', placeholder: 'Your Skills' }, value: '' }
        }
      }}
    }
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.formElements
    };

    const updatedPersonalEl = {
      ...updatedForm.personal
    }

    const identifierElement = {
      ...updatedPersonalEl[inputIdentifier]
    };
    const updatedFormElement = {
      ...identifierElement[event.target.name]
    };

    updatedFormElement.value = event.target.value;
    updatedPersonalEl[inputIdentifier][event.target.name] = updatedFormElement;
    this.setState({formElements: updatedForm});
  }


  render() {

    const formElementsObj = {};
    const formElementsArray = [];
    //const formElements = this.props.formElements;
    const formElements = this.state.formElements.personal;

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
              <h3 className="card-title">Personal Info</h3>
              <hr/>
            </div>
            <form onSubmit={this.props.formSubmit}>
                {
                  formElementsArray.map(formElement => (
                    <Aux key={formElement.id}>

                      <div className="row col-lg-10 mx-auto">
                          {formElement.id === 'divider'+formElement.config ?
                              <div className="col-lg-12 text-left">
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


export default PersonalDetails;
