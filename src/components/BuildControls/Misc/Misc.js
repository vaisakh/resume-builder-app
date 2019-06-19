import React from 'react';
import Aux from '../../../hoc/Aux';
import Input from '../../UserControls/Input/Input';

const misc = (props) => {
  const formElementsArray = [];
  const formElements = props.formElements;

  for(let key in formElements) {
    formElementsArray.push({
      id: key,
      config: formElements[key]
    })
  }


  return(

    <Aux>
      <div className="container col-lg-8 mx-auto text-center">
        <div className="shadow border-0 card animated fadeInLeft">
          <div className="card-body">
            <h3 className="card-title">Misc</h3>
            <hr/>
          </div>

          <form onSubmit={props.formSubmit}>
              {
                formElementsArray.map(formElement => (
                  <Aux key={formElement.id}>

                    <div className="row col-lg-10 mx-auto">
                      <div className="col-lg-12 text-left">
                        <Input
                          key={formElement.id}
                          name={formElement.id}
                          elementType={formElement.config.elementType}
                          elementConfig={formElement.config.elementConfig}
                          value={formElement.config.value}
                          changed={props.inputChanged}
                          />
                      </div>
                    </div>
                  </Aux>
                ))
              }
                  <br />
                  <div className="container text-center">
                    <button type="button" className="btn btn-info" onClick={props.prevPage}><i className="fas fa-angle-left mr-1"></i>Back</button>
                    <button type="submit" className="btn btn-info" onClick={props.nextPage}>Next<i className="fas fa-angle-right ml-1"></i></button>
                  </div>

                  <br/>
                </form>
              </div>
            </div>
            <br/>
          </Aux>

  );
}

export default misc;
