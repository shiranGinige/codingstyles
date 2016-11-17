import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

const propTypes = {

    someAction: PropTypes.func,
    someField: PropTypes.string

};

class ReduxedComponentTemplate extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {

        return (
            <div>
                <span>your contenet</span>
            </div>
        );
    }

}

var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        someActionCaller: function () {
            dispatch(templateActions.someAction());
        }
    };
};

var mapStateToProps = function (state, ownProps) {
    return {
        someState: state.someState
    };
};

ReduxedComponentTemplate.propTypes = propTypes;

module.exports = connect(mapStateToProps, mapDispatchToProps)(ReduxedComponentTemplate);
