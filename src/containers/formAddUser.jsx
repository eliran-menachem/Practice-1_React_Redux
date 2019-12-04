import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/action';
// import { stat } from 'fs';

class FormAddUser extends Component {
   
    state = {
        user: {
            id:"",
            firstName: '',
            lastName: '',
            age: 0,
           
        },
    }


    handlerChangeUser = (property, value) => {
        console.log(this.props.users);
        let user = this.state.user;
        user[property] = value
        console.log(property, ':', value);
    }



    render() {
        console.log(this.props.users);
        

        return (

            <form >
                <h2>add a new user:</h2>
                <div className="form-group">
                    <label htmlFor="idFirstName">First Name:</label>
                    <input type="text" value={this.state.firstName} onChange={(e) => this.handlerChangeUser('firstName', e.target.value)} className="form-control" id="idFirstName" placeholder="Write Your First Name..." required />
                </div>
                <div className="form-group">
                    <label htmlFor="idLastName">Last Name:</label>
                    <input type="text" value={this.state.lastName} onChange={(e) => this.handlerChangeUser('lastName', e.target.value)} className="form-control" id="idLastName" placeholder="Write Your Last Name..." required />
                </div>
                <div className="form-group">
                    <label htmlFor="idAge">Age:</label>
                    <input type="number" value={this.state.age} onChange={(e) => this.handlerChangeUser('age', e.target.value)} className="form-control" id="idAge" placeholder="Write Your Age..." required />
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
                    <div className='btn btn-info mt-3' onClick={() => this.props.createNewUser(this.state.user)}>Add User</div>
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
        createNewUser: (newUser) => {
            newUser.id = store.counter;
            dispatch({ type: actionTypes.ADDNEWUSER,newUser})
        }

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddUser);