import React from 'react';
import { connect } from 'react-redux';
import { setGender } from '../../store/actions/index';

class Gender extends React.Component {

    constructor(props) {
        super(props);

        this.genderClick = this.genderClick.bind(this);
    }


    // If gender was selected
    componentDidMount () {
        if (this.props.store.userInfo.gender === 'male') {
            return
        } else {
            this.setActiveGender();
        }
    }

    setActiveGender() {
        const gender = this.props.store.userInfo.gender;
        const genders = document.querySelectorAll('.gender-item');
        genders[0].classList.remove('active');
        for (let i = 0; i < genders.length; i++) {
            if (genders[i].textContent === gender) {
                genders[i].classList.add('active');
            }
        }
    }

    genderClick(e) {
        const genders = document.querySelectorAll('.gender-item');
        for (let i = 0; i < genders.length; i++) {
            genders[i].classList.remove('active');
        }
        e.target.classList.add('active');
        if (this.props.store.userInfo.gender !== e.target.textContent) {
            this.props.setStoreGender(e.target.textContent);
        }
    }

    getGenders() {
        const genders = ['male', 'female', 'unspecified'];
        const selectors = genders.map((item, index) => {
            return (
                <button key={item} className={`gender-item ${index === 0 ? 'active' : ''}`} onClick={this.genderClick}>
                    {item}
                </button>
            )
        });
        
        return selectors;
    }

    render () {
        return (
            <div className="screen-item ">
                <p className='title'>gender</p>
                <div className="gender-select">
                    {this.getGenders()}
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
        setStoreGender: gender => {
            dispatch(setGender(gender))
        }
    })
)(Gender)

