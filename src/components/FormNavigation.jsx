import React from 'react';
import { connect } from 'react-redux';
import { setFirstScreenValidStatus, setSecondScreenValidStatus } from '../store/actions/index';
import { passValidation, confirmPassValidation } from '../helpers/passValidation';
import { emailValidation } from '../helpers/emailValidation';

class FormNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.backClick = this.backClick.bind(this);
        this.nextClick = this.nextClick.bind(this);
    }

    backClick() {
        this.props.changeFirstScreenStatus(false);
    }

    // check if first screen inputs is valid, when 
    // we return to first screen and click next btn
    isFirstScreenEmpty() { 
        const mail = document.getElementById('mail').value;
        const pass = document.getElementById('pass').value;
        const confPassValue = document.getElementById('confPass').value;
        return !(emailValidation(mail) && 
            passValidation(pass) && 
            confirmPassValidation(pass, confPassValue));
    }

    // check if date of birth valid after first filling
    isSecondScreenEmpty() {
        const userInfo = this.props.store.userInfo;
        const birthDate = userInfo.birthDate;
        return (isNaN(birthDate));
    }

    nextClick() {
        const isFirstScreenValid = this.props.store.screenValidation.isFirstScreenValid;
        const isSecondScreenValid = this.props.store.screenValidation.isSecondScreenValid;
        const isFirstScreenFieldEmpty = !isFirstScreenValid ? this.isFirstScreenEmpty() : false;
        const isSecondScreenFieldEmpty = this.isSecondScreenEmpty();

        if (!isFirstScreenValid && !isFirstScreenFieldEmpty) {
            this.props.changeFirstScreenStatus(true);
        } else if (!isSecondScreenValid && !isSecondScreenFieldEmpty) {
            this.props.changeSecondScreenStatus(true);
        }
    }

    render() {
        const isSecondScreen = this.props.store.screenValidation.isFirstScreenValid && 
            !this.props.store.screenValidation.isSecondScreenValid;

        const isThirdScreen = this.props.store.screenValidation.isFirstScreenValid && 
            this.props.store.screenValidation.isSecondScreenValid;

        const divStyle = {justifyContent: !isSecondScreen ? 'flex-end' :  'space-between'};
        return (
            <div className={`form-navigation ${isThirdScreen ? 'hidden' : ''}`} style={divStyle}>
                {isSecondScreen ?  
                    <button onClick={this.backClick}>Back</button> : null
                }
                <button onClick={this.nextClick} className="button-next">
                    Next
                    <i className="icon-arrow-right2"></i>
                </button>
            </div>
        )
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatcher => ({
        changeFirstScreenStatus: (status) => {
            dispatcher(setFirstScreenValidStatus(status))
        },
        changeSecondScreenStatus: (status) => {
            dispatcher(setSecondScreenValidStatus(status))
        }
    })
)(FormNavigation);