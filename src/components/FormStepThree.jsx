import React from 'react';
import { connect } from 'react-redux';


class FormStepThree extends React.Component {
    constructor(props) {
        super(props);
        this.showUserInfo = this.showUserInfo.bind(this);
    }
    componentDidMount() {
        setTimeout(() => {
            this.wrapp.classList.add('animated');
        }, 500);
    }
    showUserInfo() {
        const store = this.props.store.userInfo;
        console.log(JSON.stringify(store));
    }
    render () {
        return (
            <div className="screen-three">
                <div className="screen-three_wrapp" ref={(node) => {this.wrapp = node}}>
                    <div className="validation-path">
                        <i className="icon-checkmark"></i>
                    </div>
                    <button className='dashbord-btn' onClick={this.showUserInfo}>
                        Go to dashbord 
                        <i className="icon-arrow-right2"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        store: state
    }),
)(FormStepThree);