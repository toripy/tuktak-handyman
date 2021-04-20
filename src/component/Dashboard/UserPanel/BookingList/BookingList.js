import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import BookingListTable from './BookingListTable';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles( {
    table: {
        width: "50em",
    },
} );


const BookingList = () => {
    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useContext( UserContext );
    const [bookings, setBookings] = useState( [] )
    useEffect( () => {
        fetch( "https://arcane-plateau-08997.herokuapp.com/booking", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { email: loggedInUser.email } )
        } )
            .then( res => res.json() )
            .then( data => setBookings( data ) )
    }, [loggedInUser.email] )

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>name</TableCell>
                            <TableCell align="right">service</TableCell>
                            <TableCell align="right">pay with</TableCell>
                            <TableCell align="right">status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            bookings.map( booking => <BookingListTable key={booking._id} booking={booking} /> )
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default BookingList;