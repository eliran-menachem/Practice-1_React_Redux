import * as actionType from '../action';


let counter_bank = 0;

const initialState = {

    bank_accounts: [
        { id: counter_bank++, bank_number: 12, branch: 654, account_number: 154615, balance: 15000 },
        { id: counter_bank++, bank_number: 11, branch: 123, account_number: 848646, balance: 25000 },
        { id: counter_bank++, bank_number: 13, branch: 368, account_number: 1881414, balance: 35000 },
        { id: counter_bank++, bank_number: 11, branch: 518, account_number: 54331414, balance: 45000 },
        { id: counter_bank++, bank_number: 10, branch: 728, account_number: 24145414, balance: 55000 },
        { id: counter_bank++, bank_number: 14, branch: 958, account_number: 14345414, balance: 65000 },

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