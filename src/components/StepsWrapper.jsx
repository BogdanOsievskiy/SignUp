import React from 'react';
import FormScreenOne from './screenOne/FormScreenOne';
import FormScreenTwo from './screenTwo/FormScreenTwo';
import FormStepThree from './FormStepThree';
import {connect} from 'react-redux';

class StepsWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 'first'
        }
        this.stepsToShow = this.stepsToShow.bind(this);
        this.changeStep = this.changeStep.bind(this);
    }

    changeStep(step) {
        this.setState({
            activeStep: step
        })
    }

    // use local state to controll animation of step change
    stepsToShow() {
        let blockToShow;
        if (this.state.activeStep === 'first') {
            blockToShow = <FormScreenOne changeStep={this.changeStep}/>;
        } else if (this.state.activeStep === 'second'){
            blockToShow = <FormScreenTwo changeStep={this.changeStep}/>
        } else {
            blockToShow = <FormStepThree/>
        }

        return blockToShow;
    }

    render() {
        return this.stepsToShow();
    }
}

export default connect(
    state => ({
        userInfo: state
    })
)(StepsWrapper);