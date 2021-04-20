import React from 'react';

import TableCell from '@material-ui/core/TableCell';

import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';




const BookingListTable = ( { booking } ) => {
    console.log( booking )
    let color
    if ( booking.status === "processing" ) {
        color = 'red'
    }
    if ( booking.status === "on going" ) {
        color = "yellow"
    }
    if ( booking.status === "done" ) {
        color = "green"
    }
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {booking.billing_details.name}
            </TableCell>
            <TableCell align="right">{booking.service}</TableCell>
            <TableCell align="right">{booking.type} payment</TableCell>
            <TableCell style={{ color: color }} align="right"><KeyboardArrowDownIcon />{booking.status}</TableCell>

        </TableRow>
    );
};

export default BookingListTable;