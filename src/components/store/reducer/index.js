import { GETUSER, ADDUSER } from '../../../constants/actionTypes';

const initialState = {
    usersinfo: []
}
const reducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case GETUSER:
            newState.usersinfo = action.payload
            break;
        case ADDUSER:
            newState.usersinfo = [...newState.usersinfo, action.payload]
            break;
        default:
            break;
    }
    return newState;
}

export default reducer