import React from 'react';
import { connect } from 'react-redux';
import { setPass } from '../../store/actions/index';
import { passValidation,  confirmPassValidation} from '../../helpers/passValidation'; 

class PasswordInputs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPassValid: true,
            isConfirmValid: true,
        }

        this.password = '';

        this.passwordValidation = this.passwordValidation.bind(this);
        this.confirmPassValidation = this.confirmPassValidation.bind(this);
    }

    // To see password validation conditions, open helper/passValidation
    // should be more then 6  
    passwordValidation(e) {
        this.password = e.target.value;
        this.setState({isPassValid: passValidation(this.password)});
    }

    // To see password confirm validation conditions, open helper/passValidation
    confirmPassValidation(e) {
        if (confirmPassValidation(this.password, e.target.value)) {
            this.setState({
                isConfirmValid: true,
            });
            this.props.setStorePass(this.password);
        } else {
            this.setState({
                isConfirmValid: false,
            });
        }
    }

    render() {
        const pass = this.props.store.userInfo.passWord;
        return (
            <div>
                <div className={`input-item ${this.state.isPassValid ? '' : 'error'}`}>
                    <span className="input-title">
                        Password {this.state.isPassValid ? '' : 'is invalid'}
                    </span>
                    <input type='password' id='pass' minLength="6" 
                        defaultValue={pass} onBlur={this.passwordValidation}/>
                </div>
                <div className={`input-item ${this.state.isConfirmValid ? '' : 'error'}`}>
                    <span className="input-title">
                        Confirm password {this.state.isConfirmValid ? '' : 'is invalid'}
                    </span>
                    <input type='password' id='confPass' minLength="6" 
                        defaultValue={pass} onChange={this.confirmPassValidation}/>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        setStorePass: email => {
            dispatch(setPass(email))
        }
    })
)(PasswordInputs);