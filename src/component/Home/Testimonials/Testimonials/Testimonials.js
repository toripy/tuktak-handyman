import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import Testimonial from '../Testimonial/Testimonial';
import LinearProgress from '@material-ui/core/LinearProgress';
import {
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles( ( theme ) => ( {
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing( 2 ),
        },
    },
} ) );
const Testimonials = () => {
    const classes = useStyles();

    const [reviews, setReviews] = useState( [] )
    const [spinner, setSpinner] = useState( true )

    useEffect( () => {
        fetch( "https://arcane-plateau-08997.herokuapp.com/reviews" )
            .then( res => res.json() )
            .then( data => {
                setSpinner( false )
                setReviews( data )
            } )
    }, [] )







    return spinner ? (
        <div className={classes.root}>
            <LinearProgress />
            <LinearProgress color="secondary" />
        </div> ) :
        ( <div style={{ margin: "5vh" }} >
            <h1 style={{ textAlign: "center", marginBottom: "2em" }}>TESTIMONIAL</h1>
            <Carousel>
                {
                    reviews.map( review => <Testimonial key={review._id} review={review} /> )
                }
            </Carousel>
        </div >
        );
};

export default Testimonials;