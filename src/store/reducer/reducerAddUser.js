import * as actionType from '../action';

let counter = 0;

const initialState = {
    counter:3,
    users: [
        { firstName: 'Eliran', lastName: 'Menachem', age: 34, id: 1 },
        { firstName: 'Asaf', lastName: 'Arieli', age: 33, id: 2 },
        { firstName: 'David', lastName: 'Feldman', age: 35, id: 3 }
    ],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADDNEWUSER:
            return {
                ...state,
                users: state.users.concat(action.newUser)

            }
            case actionType.GETCOUNTER:
                    return state

    }// End of switch

    return state;
}// End of reducer

export default reducer;