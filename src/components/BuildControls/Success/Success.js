import React from 'react';
import Aux from '../../../hoc/Aux';
import Input from '../../UserControls/Input/Input';

const success = (props) => {
  return(


    <Aux>
      <div className="container col-lg-8 mx-auto text-center">
        <div className="shadow border-0 card animated fadeInLeftn bounceIn">
          <div className="card-body text-center pt-5 pb-5">
            <i className="fas fa-check-circle fa-7x text-success"></i>
            <h2>We are building your Resume!</h2>
            <br/>
          </div>

        </div>
      </div>
      <br/>
    </Aux>

  );
}

export default success;
