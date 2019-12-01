import * as actionType from '../action';


let counter_bank = 0;

const initialState = {

    bank_accounts: [
        { id: counter_bank++, bank_number: 12, branch: 654, account_number: 154615, balance: 15000 },
        { id: counter_bank++, bank_number: 11, branch: 123, account_number: 848646, balance: 25000 },
        { id: counter_bank++, bank_number: 13, branch: 568, account_number: 141414, balance: 35000 },

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