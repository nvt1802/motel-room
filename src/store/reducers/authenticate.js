import * as actionTypes from '../actions/actionTypes'

const authenticate = (state = { account: {}, logged: false }, action) => {
    switch (action.type) {
        case actionTypes.INIT_DATA_AUTHENTICATE:
            return {
                account: {
                    accountId: action.payload.accountId,
                    userName: action.payload.userName,
                    role: action.payload.role,
                    name: action.payload.name,
                    gender: action.payload.gender,
                    birthday: action.payload.birthday,
                    phone: action.payload.phone,
                    email: action.payload.email,
                    provinceId: action.payload.provinceId,
                    districtId: action.payload.districtId,
                },
                logged: action.logged
            }
        case actionTypes.REMOVE_DATA_AUTHENTICATE:
            return {
                account: {},
                logged: action.logged
            }
        default:
            return state
    }
}

export default authenticate