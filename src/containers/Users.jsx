import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/action';

class Users extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <h1>Users:</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#ID</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <th>{user.id}</th>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.age}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
};
const mapStateToProps = state => {
    return {
        users: state.users.users,
        bankAccount: state.bankAccount.bank_accounts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addNewUser: () => dispatch({ type: actionTypes.ADDNEWUSER }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);