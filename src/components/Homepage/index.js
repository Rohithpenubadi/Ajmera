import React, { useState } from 'react'
import { SwitchToggle } from '../SwitchToggle';
import { StyledApp } from './index.styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { adduserinfo } from '../store/actions';

const Homepage = (data) => {


    const { toggle, checked, userinfo } = data;
    const [addUser, setAddUser] = useState({
        email: '',
        first_name: '',
        last_name: '',
        avatar: ''
    })

    const dispatch = useDispatch()

    const clear = () => {
        setAddUser({
            email: '',
            first_name: '',
            last_name: '',
            avatar: ''
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(adduserinfo(addUser))
        clear();
    }

    return (
        <StyledApp>
            <div className="header">
                <SwitchToggle checked={checked} onChange={() => toggle()} />
            </div>
            <div className="second-section">
                <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table-section">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right" className="table-section">#</TableCell>
                            <TableCell align="right" className="table-section">id</TableCell>
                            <TableCell align="right" className="table-section">Email&nbsp;</TableCell>
                            <TableCell align="right" className="table-section">Username&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userinfo?.map((detail) => (
                            <TableRow
                                key={detail.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" className="table-section">
                                    <Avatar alt={detail.first_name} src={detail.avatar} />
                                </TableCell>
                                <TableCell align="right" className="table-section">{detail.id}</TableCell>
                                <TableCell align="right" className="table-section">{detail.email}</TableCell>
                                <TableCell align="right" className="table-section">{detail.first_name + " " + detail.last_name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <form className="text-form" autoComplete='off' onSubmit={handleSubmit}>
                    <p>Add an User</p>
                    <TextField
                        required
                        // error
                        id="outlined-required"
                        label="Email"
                        InputLabelProps={{ className: "text-field" }}
                        defaultValue="Email"
                        InputProps={{
                            className: "text-field"
                        }}
                        value={addUser.email}
                        onChange={(e) => setAddUser({ ...addUser, email: e.target.value })}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="First Name"
                        defaultValue="First Name"
                        InputProps={{
                            className: "text-field"
                        }}
                        InputLabelProps={{ className: "text-field" }}
                        value={addUser.first_name}
                        onChange={(e) => setAddUser({ ...addUser, first_name: e.target.value })}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Last Name"
                        defaultValue="Last Name"
                        InputProps={{
                            className: "text-field"
                        }}
                        InputLabelProps={{ className: "text-field" }}
                        value={addUser.last_name}
                        onChange={(e) => setAddUser({ ...addUser, last_name: e.target.value })}
                    />
                    <TextField
                        required
                        // error
                        id="outlined-required"
                        label="avatar"
                        defaultValue="avatar"
                        InputProps={{
                            className: "text-field"
                        }}
                        InputLabelProps={{ className: "text-field" }}
                        value={addUser.avatar}
                        onChange={(e) => setAddUser({ ...addUser, avatar: e.target.value })}
                    />
                    <Button variant='contained' color="primary" size='large' type='submit' fullWidth>Submit</Button>
                </form>
            </div>
        </StyledApp>
    )
}

export default Homepage;