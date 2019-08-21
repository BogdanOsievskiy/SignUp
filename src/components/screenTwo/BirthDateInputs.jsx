import React from 'react';
import { connect } from 'react-redux';
import { setDate } from '../../store/actions/index';

class BirthDateInputs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDateValid: true,
            isMounthValidate: true,
            isYearValidate: true

        }
        this.date = '';
        this.mounth = '';
        this.year = '';
        ['dayValidation', 'monthValidation', 'yearValidation', 'getTimeStamp'].forEach(f => {
			this[f] = this[f].bind(this);
		});
        
    }

    // If store is not empty
    componentDidMount() {
        this.getValue();
    }

    getValue() {
        const dateTimestamp = this.props.store.userInfo.birthDate;
        if (isNaN(dateTimestamp)) {
            return '';
        }
        const birthDate = new Date(dateTimestamp);
        const day = birthDate.getDate();
        const mounth = birthDate.getMonth() + 1;
        const year = birthDate.getFullYear();
        this.dayInput.value = (day < 10 ? '0' : '') + day;
        this.mounthInput.value = (mounth < 10 ? '0' : '') + mounth;
        this.yearInput.value = year;
    }

    // Day validation
    dayValidation(e) {
        const inputValue = e.target.value;
        const isDayValid = inputValue <= 31 && inputValue.length === 2;
       
        this.setState({
            isDateValid: isDayValid
        });
        
        if (isDayValid) {
            this.date = inputValue;
            this.getTimeStamp();
        }
    }

    // Month validation
    monthValidation(e) {
        const inputValue = e.target.value;
        const isMounthVAlid = inputValue <= 12 && inputValue.length === 2;
        this.setState({
            isMounthValidate: isMounthVAlid
        });
        if (isMounthVAlid) {
            this.mounth = inputValue;
            this.getTimeStamp();
        }
        
    }

    // Year validation, should be more then 18
    yearValidation(e) {
        const inputValue = e.target.value;
        const date = new Date();
        const currentYear = date.getFullYear();
        const moreHundred = currentYear - 100;
        const adulthood = currentYear - 18;
        const isYearValid = (inputValue <= adulthood && inputValue >= moreHundred);
        this.setState({
            isYearValidate: isYearValid,
        });
        if (isYearValid) {
            this.year = inputValue;
            this.getTimeStamp();
        }
    }

    getTimeStamp() {
        if (!!(this.dayInput.value.length === 2 && 
            this.mounthInput.value.length === 2 && 
            this.yearInput.value.length === 4)) {
            const newDate = new Date(`${this.year}-${this.mounth}-${this.date}`);
            this.props.setStoreDate(newDate.getTime());
        } else {
            return;
        }
    }

    dateChange(e) {
        const numberLength = e.target.placeholder === 'YYYY' ? 4 : 2;
        if (e.target.value.length > numberLength) {
            e.target.value = e.target.value.slice(0,numberLength); 
        }
    }
    
    render() {
        const isValid = this.state.isDateValid && this.state.isMounthValidate && this.state.isYearValidate;
        return(
            <div className={`screen-item ${isValid ? '' : 'error'}`}>
                <p className='title'>date of birth {isValid ? '' : 'must be over 18'}</p>
                <div className='input-row'>
                    <input  type='number' placeholder='DD' maxLength='2' ref={(node) => {this.dayInput = node}} 
                        onBlur={this.dayValidation} 
                        onChange={this.dateChange}
                    />
                    <input  type='number' placeholder='MM' maxLength='2' ref={(node) => {this.mounthInput = node}}
                        onBlur={this.monthValidation} onChange={this.dateChange}
                    />
                    <input  type='number' placeholder='YYYY' maxLength='4' ref={(node) => {this.yearInput = node}}
                        onBlur={this.yearValidation} onChange={this.dateChange}/>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        setStoreDate: (date) => {
            dispatch(setDate(date))
        }
    })
)(BirthDateInputs);