import React from 'react';
import {
    makeStyles,
    Grid,
    Button,



} from "@material-ui/core";
import { useForm } from "react-hook-form";
const useStyles = makeStyles( ( theme ) => ( {

    inputField: {
        padding: '5px',
        marginBottom: "5px"
    },


} ) );
const AddService = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = ( data, e ) => {
        const formData = new FormData()
        formData.append( 'file', data.image[0] )
        formData.append( 'serviceName', data.serviceName )
        formData.append( 'description', data.description )

        fetch( 'https://arcane-plateau-08997.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        } )
    }

    const classes = useStyles();

    return (
        <div >
            <form onSubmit={handleSubmit( onSubmit )}>
                <Grid container

                    spacing={2}>
                    <Grid xs={6} item >
                        <label >Service Title</label>
                        <br />
                        <input className={classes.inputField} type="text" placeholder="Enter title" {...register( "serviceName", { required: true } )} />
                        <br />
                        {errors.name && <span style={{ color: 'red' }}>This field is required</span>}
                    </Grid >
                    <Grid xs={6} item >
                        <label >Image</label>
                        <br />
                        <input
                            type="file"
                            {...register( "image", { required: true } )}
                        />
                        <br />
                        {errors.image && <span style={{ color: 'red' }}>This field is required</span>}

                    </Grid>
                    <Grid xs={6} item >
                        <label >Description</label>
                        <br />
                        <input className={classes.inputField} type="text" placeholder="Enter Description" {...register( "description", { required: true } )} />
                        <br />
                        {errors.description && <span style={{ color: "red" }}>This field is required</span>}
                    </Grid >

                    <Grid xs={6} item >
                        <Button type="submit" className={classes.inputField} variant="contained" color="secondary">
                            Submit
                        </Button>
                    </Grid >

                </Grid>



            </form>

        </div>
    );
};

export default AddService;