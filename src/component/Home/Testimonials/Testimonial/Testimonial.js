import React from 'react';
import GradeIcon from '@material-ui/icons/Grade';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles( ( theme ) => ( {
    grad: {
        color: "yellow"
    },
    avatar: {
        width: theme.spacing( 20 ),
        height: theme.spacing( 20 ),
    },
} ) );

const Testimonial = ( { review } ) => {
    const classes = useStyles();
    return (
        <div className="d-flex align-items-center ">
            <Avatar alt={review.userName} src={review.photo} className={classes.avatar} />
            <div style={{ marginLeft: "5%" }}>
                <h4 style={{ color: "tomato" }}>{review.userName}</h4>
                <p>{review.review}</p>
                <h5>{review.serviceName}</h5>
                <GradeIcon className={classes.grad} />
                <GradeIcon className={classes.grad} />
                <GradeIcon className={classes.grad} />
                <GradeIcon className={classes.grad} />
                <GradeIcon className={classes.grad} />
            </div>
        </div>
    );
};

export default Testimonial;