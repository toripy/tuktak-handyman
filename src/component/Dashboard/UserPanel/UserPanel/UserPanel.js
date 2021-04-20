import React, { useState } from 'react';
import {
    makeStyles,
    ListItem,
    ListItemIcon,
    ListItemText,
    List,
} from "@material-ui/core";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RateReviewIcon from '@material-ui/icons/RateReview';
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import Review from '../Review/Review';



const useStyles = makeStyles( ( theme ) => ( {
    root: {
        display: "flex"

    },

    manageItem: {

        height: "100vh",
        backgroundColor: "#203D37",
        color: 'white',
    },
    icon: {
        color: "white",
    }
} ) );

const UserPanel = () => {


    const classes = useStyles();
    const [clickItem, setClickItem] = useState( 0 )
    return (
        <div className={classes.root}>
            <List className={classes.manageItem} component="nav" aria-label="main mailbox folders">
                <ListItem button onClick={() => setClickItem( 0 )}>
                    <ListItemIcon>
                        <ShoppingCartIcon className={classes.icon} />

                    </ListItemIcon>
                    <ListItemText primary="Book" />
                </ListItem>

                <ListItem button onClick={() => setClickItem( 1 )}>
                    <ListItemIcon>
                        <LocalMallIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Booking List" />
                </ListItem>
                <ListItem button onClick={() => setClickItem( 2 )}>
                    <ListItemIcon>
                        <RateReviewIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Review" />
                </ListItem>
            </List>
            <div style={{ padding: "5px" }}>

                {( clickItem === 0 ) &&
                    <Book />
                }
                {( clickItem === 1 ) &&
                    <BookingList />
                }
                {( clickItem === 2 ) &&
                    <Review />
                }

            </div>
        </div>

    );
};

export default UserPanel;