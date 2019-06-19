import React, { Component } from 'react';
import BuildControls from '../../components/BuildControls/BuildControls';
import Aux from '../../hoc/Aux';

class ResumeBuilder extends Component {

  render () {
    return (
      <Aux>
        <div className="resume-builder col-lg-8 text-center mx-auto mt-5">
          <h1><b>Resume Builder</b></h1>
          <p>First React App</p>
          <hr/>
        </div>

        <div className="build-controls pt-5 mt-5">
          <BuildControls />
        </div>
      </Aux>
    );
  }
}

export default ResumeBuilder;
