import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/action';

class Users extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <h1>hello</h1>
                </div>
            </div>
        )
    }
};
const mapStateToProps = state => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addNewUser: () => dispatch({ type: actionTypes.ADDNEWUSER }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);