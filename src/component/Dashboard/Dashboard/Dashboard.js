import React, { useContext, useEffect, useState } from 'react';


import {
    makeStyles,
} from "@material-ui/core";
import { UserContext } from '../../../App';
import AdminPanel from '../AdminPanel/AdminPanel/AdminPanel';
import UserPanel from '../UserPanel/UserPanel/UserPanel';
import Navbar from '../../Home/Header/Navbar/Navbar';


import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles( ( theme ) => ( {
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing( 2 ),
        },
    },
} ) );




const Dashboard = () => {
    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useContext( UserContext );
    const [isAdmin, setIsAdmin] = useState()
    const [spinner, setSpinner] = useState( true )
    useEffect( () => {
        fetch( "https://arcane-plateau-08997.herokuapp.com/isAdmin", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { email: loggedInUser.email } )
        } )
            .then( res => res.json() )
            .then( data => {
                setSpinner()
                setIsAdmin( data )
            } )
    }, [loggedInUser.email] )

    return spinner ? (
        <div className={classes.root}>
            <LinearProgress />
            <LinearProgress color="secondary" />
        </div> ) :
        ( <div>
            <Navbar />
            { loggedInUser.email ?
                <div>

                    {isAdmin ? <AdminPanel />
                        :
                        <UserPanel />}
                </div> :
                <div>
                    <h2 style={{ color: "red", textAlign: "center", marginTop: "5em" }}>You are Logged Out. Login first</h2>
                </div>

            }
        </div>


        );
};

export default Dashboard;