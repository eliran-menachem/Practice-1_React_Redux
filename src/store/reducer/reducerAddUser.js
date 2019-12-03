import * as actionType from '../action';

let counter = 0;

const initialState = {
    users: [
        { firstName: 'Eliran', lastName: 'Menachem', age: 34, id: counter++ },
        { firstName: 'Asaf', lastName: 'Arieli', age: 33, id: counter++ },
        { firstName: 'David', lastName: 'Feldman', age: 35, id: counter++ }
    ],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADDNEWUSER:
            return {
                ...state,
                users: state.users.concat(action.newUser)

            }

    }// End of switch
    return state;
}// End of reducer

export default reducer;