import { getusers, adduser } from '../api';
import {GETUSER, ADDUSER } from '../../../constants/actionTypes';


export const getuserinfo = () => async(dispatch) => {
    try {
        const { data } = await getusers();
        dispatch({type: GETUSER, payload: data.data})
    } catch (error) {
        console.error(error)
    }
}

export const adduserinfo = (userdetails) => async(dispatch) => {
    try {
        const { data } = await adduser(userdetails);
        dispatch({type: ADDUSER, payload: data})
    } catch (error) {
        console.error(error)
    }
}