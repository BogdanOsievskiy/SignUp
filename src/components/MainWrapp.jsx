import React from 'react';
import FormHeader from './FormHeader';
import StepsWrapper from './StepsWrapper';
import FormNavigation from './FormNavigation';

class CommentList extends React.Component {
    render() {
        return (
            <div className="sign-form_wrapp">
                <FormHeader />
                <StepsWrapper />
                <FormNavigation />
            </div>
        );
    }
}

export default CommentList;