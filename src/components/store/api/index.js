import axios from 'axios';

export const getusers = () => axios.get('https://reqres.in/api/users')
export const adduser = (newuser) => axios.post('https://reqres.in/api/users', newuser)