import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import carousel1 from "../../../../image/image/carousel1.jpg"
import carousel2 from "../../../../image/image/carousel2.jpg"
import carousel3 from "../../../../image/image/carousel3.jpg"

const useStyles = makeStyles( {
    root: {
        display: "flex",
        height: "800px",
        backgroundColor: "tomato",


    },
    media: {
        width: '100%',

        height: "100%"
    },
    leftSide: {
        margin: "auto 0 auto 100px",
        width: "50%",

    }
} );
const MainHeader = () => {
    const classes = useStyles();
    var items = [
        {
            id: 0,
            image: carousel1,
            type: "You can trust us"
        },
        {
            id: 1,
            image: carousel2,
            type: "Any time anywhere"
        },
        {
            id: 2,
            image: carousel3,
            type: "we believe we can solve your problem"

        },

    ]
    return (

        <div>
            <Carousel>
                {

                    items.map( item => {

                        return <Card key={item.id} className={classes.root}>
                            <div className={classes.leftSide} >
                                <Typography variant="h3" color="textSecondary" component="p">
                                    {item.type}
                                </Typography>
                                <CardActions>
                                    <Button variant="contained" color="secondary" >
                                        See More
                                    </Button>
                                </CardActions>

                            </div>

                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={item.image}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>

                                </CardContent>

                            </CardActionArea>

                        </Card>



                    }
                    )

                }
            </Carousel>
        </div>


    );
};

export default MainHeader;