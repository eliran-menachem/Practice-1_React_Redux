import * as actionType from '../action';

const initialState = {
    users: [
        { firstName: 'Eliran', lastName: 'Menachem', age: 34 },
        { firstName: 'Asaf', lastName: 'Ariali', age: 33 },
        { firstName: 'David', lastName: 'Feldman', age: 35 }
    ]

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADDNEWUSER:
            return {
                ...state,

            }

    }// End of switch
    return state;
}// End of reducer

export default reducer;