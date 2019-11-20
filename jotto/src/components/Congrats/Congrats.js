import React from 'react';
import PropTypes from 'prop-types'; //when we use props, need to make sure the data type.

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @return {JSX.Element} - Rendered component (or null if `success` props is false)
 */
const Congrats = (props) => {
    if (props.success) {
        return (
            <div data-test="component-congrats" className="alert alert-success">
                <span data-test="congrats-message">
                    Congratulations! You guessed the word!
                </span>
            </div>
        )
    } else {
        return (
            <div data-test="component-congrats" />
        );
    }
}

//expected data type.
Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
};

export default Congrats;