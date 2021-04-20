import React, { useEffect, useState } from 'react';

import Service from '../Service/Service';

import LinearProgress from '@material-ui/core/LinearProgress';
import {
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles( ( theme ) => ( {
    root: {
        width: '100%',
        '& > * + *': {
            margin: theme.spacing( 5 ),

        },
    },
} ) );

const Services = () => {
    const classes = useStyles();
    const [spinner, setSpinner] = useState( true )
    const [services, setServices] = useState( [] )
    useEffect( () => {
        fetch( "https://arcane-plateau-08997.herokuapp.com/services" )
            .then( res => res.json() )
            .then( data => {
                setSpinner( false )
                setServices( data )
            } )
    }, [] )



    return spinner ? (
        <div className={classes.root}>
            <LinearProgress />
            <LinearProgress color="secondary" />
        </div> ) :
        (
            <section >
                <div style={{ textAlign: "center" }} >
                    <h1>SERVICES</h1>
                    <h1 style={{ color: "tomato" }}>WHAT WE DO</h1>
                </div>
                <div className="row ">
                    {
                        services.map( service => <Service key={service._id} service={service} /> )
                    }
                </div>
            </section>
        );
};

export default Services;