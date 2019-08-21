import React from 'react';
import EmailInput from './EmailInput';
import PasswordInputs from './PassworInputs';
import {connect} from 'react-redux';
class FormScreenOne extends React.Component {

    componentDidMount() {
        // set start animation
        setTimeout(() => {
            this.inputs.classList.add('animate');
        },500);
        
    }

    // check store changes to start hide animation for a first screen
    shouldComponentUpdate(nextProps) {
        if (nextProps.userInfo.screenValidation.isFirstScreenValid 
            && !this.props.userInfo.screenValidation.isFirstScreenValid) {
            this.inputs.classList.remove('animate');
            setTimeout(() => {
                this.props.changeStep('second');
            }, 1000);
        }
        return true;
    }

    render() {
        return (
            <div className="inputs" ref={(node) => {this.inputs = node}}>
                <EmailInput/>
                <PasswordInputs/>
            </div>
        )
    }
}

export default connect(
    state => ({
        userInfo: state
    })
)(FormScreenOne);