import React, { useState } from 'react';


import {
    makeStyles,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import EditIcon from '@material-ui/icons/Edit';
import OrderList from '../OrderList/OrderList';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServices/ManageServices';




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


const AdminPanel = () => {
    const classes = useStyles();
    const [clickItem, setClickItem] = useState( 0 )
    return (

        <div className={classes.root}>
            <List className={classes.manageItem} component="nav" aria-label="main mailbox folders">
                <ListItem button onClick={() => setClickItem( 0 )}>
                    <ListItemIcon>
                        <LocalMallIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Order List" />
                </ListItem>
                <ListItem button onClick={() => setClickItem( 1 )}>
                    <ListItemIcon>
                        <AddCircleOutlineIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Add Service" />
                </ListItem>
                <ListItem button onClick={() => setClickItem( 2 )}>
                    <ListItemIcon>
                        <PersonAddIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Make Admin" />
                </ListItem>
                <ListItem button onClick={() => setClickItem( 3 )}>
                    <ListItemIcon>
                        <EditIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Manage Services" />
                </ListItem>
            </List>
            <div style={{ padding: "5px" }}>

                {( clickItem === 0 ) &&
                    <OrderList />
                }
                {( clickItem === 1 ) &&
                    <AddService />
                }
                {( clickItem === 2 ) &&
                    <MakeAdmin />
                }
                {( clickItem === 3 ) &&
                    <ManageServices />
                }
            </div>
        </div>
    );
};

export default AdminPanel;