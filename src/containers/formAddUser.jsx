import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/action';

class FormAddUser extends Component {
    render() {
        return (
            <form >
                <h2>add a new user:</h2>
                <div className="form-group">
                    <label htmlFor="idFirstName">First Name:</label>
                    <input type="text" className="form-control" id="idFirstName" placeholder="Write Your First Name..." />
                </div>
                <div className="form-group">
                    <label htmlFor="idLastName">Last Name:</label>
                    <input type="text" className="form-control" id="idLastName" placeholder="Write Your Last Name..." />
                </div>
                <div className="form-group">
                    <label htmlFor="idAge">Age:</label>
                    <input type="number" className="form-control" id="idAge" placeholder="Write Your Age..." />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Bank Acount</label>
                    <select className="form-control" id="exampleFormControlSelect1" >
                        {this.props.bankAccount.map((bank) => {
                            return (
                                <option key={bank.id}>{bank.bank_number + '-' + bank.branch + '-' + bank.account_number}</option>
                            )
                        })}

                    </select>
                </div>
            </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(FormAddUser);