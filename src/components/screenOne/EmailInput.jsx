import React from 'react';
import {setEmail} from '../../store/actions/index';
import { connect } from 'react-redux';
import {emailValidation} from '../../helpers/emailValidation';

class EmailInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEmailValid: true,
        }
        this.isMailValid = this.isMailValid.bind(this);
    }
    // Mail validation.
    // To see validation condition, open helpers/emailValidation.js
    isMailValid(e) {
        const inputValue = e.target.value;
        const isEmailValid = emailValidation(inputValue);
        if (this.props.store.userInfo.email === inputValue) {
            return
        }
        if (isEmailValid) {
            this.setState({isEmailValid: true});
            this.props.setStoreEmail(inputValue);
        } else {
            this.setState({isEmailValid: false});
        }
    }

    render() {
        const email = this.props.store.userInfo.email;
        return(
            <div className={`input-item ${!this.state.isEmailValid ? 'error' : null}`}>
                <span className="input-title">
                    Email {`${!this.state.isEmailValid ? 'is required' : ''}`}
                </span>
                <input type='mail' id='mail' className='mail'
                     defaultValue={email} onBlur={this.isMailValid}/>
            </div>
        )
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        setStoreEmail: email => {
            dispatch(setEmail(email))
        }
    })
)(EmailInput);