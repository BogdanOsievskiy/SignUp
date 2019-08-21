import React from 'react';
import { connect } from 'react-redux';

class FormHeader extends React.Component {

    // to add start animayion for progress bar
    componentDidMount () {
        this.progressBar.style.width = 0;
        setTimeout(() => {
            this.progressBar.style.width = '33%'
        },500);
    }

    getTitle() {
        const title = (this.props.store.screenValidation.isFirstScreenValid
            && this.props.store.screenValidation.isSecondScreenValid ) ? 'Thank you!' : 'Signup';
        return(
            <h2>{title}</h2>
        )
    }

    // get width depend on steps to animate progress bar
    getLineWidth() {
        let width;
        const isFirstScreenValid = this.props.store.screenValidation.isFirstScreenValid;
        const isSecondScreenValid = this.props.store.screenValidation.isSecondScreenValid;
        if (!isFirstScreenValid && !isSecondScreenValid) {
            width = '33%';
        } else if (isFirstScreenValid && !isSecondScreenValid){
            width = '66%';
        } else {
            width = '101%';
        }
        return width;
    }

    render() {
        const width = {
            width: this.getLineWidth()
        }
        return (
            <div className="form-header">
               { this.getTitle()}
                <div className="progress-bar">
                    <span className="progress-bar-line" style={width} ref={(node) => {this.progressBar = node}}></span>
                </div>
            </div>
        )
    }
}

export default  connect(
    state => ({
        store: state
    })
)(FormHeader);