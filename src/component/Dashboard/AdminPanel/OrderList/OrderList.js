import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import OrderListTable from './OrderListTable';

const useStyles = makeStyles( {
    table: {
        width: "50em",
    },
} );


const OrderList = () => {
    const classes = useStyles();
    const [orderLists, setOrderLists] = useState( [] )
    useEffect( () => {
        fetch( "https://arcane-plateau-08997.herokuapp.com/orderListAdmin" )
            .then( res => res.json() )
            .then( data => setOrderLists( data ) )
    }, [] )



    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>name</TableCell>
                            <TableCell align="right">email</TableCell>
                            <TableCell align="right">service</TableCell>
                            <TableCell align="right">pay with</TableCell>
                            <TableCell align="right">status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orderLists.map( orderList => <OrderListTable key={orderList._id} orderList={orderList} /> )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default OrderList;