import React from 'react';
import { connect } from 'react-redux';
import { setAnswer } from '../../store/actions/index';

class DropList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropOpen: false
        };

        ['changeAnswer', 'dropArrowClick', 'inputChange'].forEach(f => {
			this[f] = this[f].bind(this);
		});
    }

    componentDidMount() {
        if (this.props.store.userInfo.answer.length) {
            this.answerInput.value = this.props.store.userInfo.answer;
        }
    }

    changeAnswer(e) {
        const text = e.target.textContent;
        const inputField = document.getElementsByClassName('answerInput');
        inputField[0].value = text;
        if (text !== this.props.store.userInfo.gender) {
            this.props.setStoreAnswer(text);
        }
        this.setState({isDropOpen: false});
    }

    getdropList() {
        const options = [
            'Friend told me',
            'Advertising',
            'From Google'
        ];
        const optionsButton = options.map((item,index) => {
            return (
                <button key={`drop${index}`} onClick={this.changeAnswer}>
                    {item} 
                </button>
            );
        });
        return optionsButton;
    }

    dropArrowClick() {
        this.setState({
            isDropOpen: !this.state.isDropOpen
        })
    }

    inputChange(e) {
        this.props.setStoreAnswer(e.target.value);
        if (this.state.isDropOpen) {
            this.setState({isDropOpen: false});
        }
    }

    render() {
        return (
            <div className="screen-item">
                <p className='title'>where did you here about us</p>
                <div className={`drop-wrapp ${this.state.isDropOpen ? 'open' : ''}`}>
                    <input type="text" className='answerInput' ref={(node) => {this.answerInput = node}} onBlur={this.inputChange}/>
                    <button className='drop-btn' onClick={this.dropArrowClick}>
                        <i className="icon-ctrl"></i>
                    </button>
                    <div className='drop-list'>
                        {this.getdropList()}
                    </div>
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
        setStoreAnswer: answer => {
            dispatch(setAnswer(answer))
        }
    })
)(DropList);