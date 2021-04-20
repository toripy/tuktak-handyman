import React, { useState } from 'react';
import TableCell from '@material-ui/core/TableCell';

import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const OrderListTable = ( { orderList } ) => {
    const [selectStatus, setSelectStatus] = useState()
    const [status, setStatus] = useState()
    const [anchorEl, setAnchorEl] = React.useState( null );
    const handleClick = ( event ) => {


        setAnchorEl( event.currentTarget );
        setStatus( event.currentTarget.innerText )
    };

    const handleClose = ( event ) => {

        fetch( "https://arcane-plateau-08997.herokuapp.com/updateStatus", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { id: orderList._id, status: event.currentTarget.innerText } )
        } )
        setSelectStatus( event.currentTarget.innerText )

        setAnchorEl( null );
    };


    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {orderList.billing_details.name}
            </TableCell>
            <TableCell align="right">{orderList.billing_details.email}</TableCell>
            <TableCell align="right">{orderList.service}</TableCell>
            <TableCell align="right">{orderList.type} payment</TableCell>
            <TableCell align="right">

                <div>
                    <Button style={{ textTransform: 'none', }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <KeyboardArrowDownIcon /> {
                            selectStatus || orderList.status || status}
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean( anchorEl )}
                        onClose={handleClose}
                    >
                        <MenuItem style={{ textTransform: 'none', }} onClick={handleClose}>processing</MenuItem>
                        <MenuItem style={{ textTransform: 'none', }} onClick={handleClose}>on going</MenuItem>
                        <MenuItem style={{ textTransform: 'none', }} onClick={handleClose}>done</MenuItem>
                    </Menu>
                </div>
            </TableCell>

        </TableRow >
    );
};

export default OrderListTable;