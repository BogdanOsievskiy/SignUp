import React from 'react';
import BirthDateInputs from './BirthDateInputs';
import Gender from './Gender';
import DropList from './DropList';
import {connect} from 'react-redux';
class FormScreenTwo extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.wrapper.classList.add('animate');
        },500);
        
    }

    // check a store changes to activate screen chanhe animation
    shouldComponentUpdate(nextProps) {
        const nextSecondValid = nextProps.store.screenValidation.isSecondScreenValid;
        const currentSecondValid = this.props.store.screenValidation.isSecondScreenValid;
        const nextFirstValid = nextProps.store.screenValidation.isFirstScreenValid;
        const currentFirstValid = this.props.store.screenValidation.isFirstScreenValid;
        if (nextSecondValid && !currentSecondValid) {
            // Go to third screen
            this.wrapper.classList.remove('animate');
            setTimeout(() => {
                this.props.changeStep('third');
            }, 1000);

        } else if (!nextFirstValid && currentFirstValid) {
            // Go to first screen
            this.wrapper.classList.remove('animate');
            setTimeout(() => {
                this.props.changeStep('first');
            }, 1000);
        }
       
        return true;
    }
    
    render() {
        return (
            <div className="screen-two" ref={(node) => {this.wrapper = node}}>
                <BirthDateInputs/>
                <Gender/>
                <DropList/>
            </div>
        )
    }
}

export default connect(
    state => ({
        store: state
    })
)(FormScreenTwo);