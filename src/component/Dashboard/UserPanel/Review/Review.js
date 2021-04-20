import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import {
    Button,
} from "@material-ui/core";
import { UserContext } from '../../../../App';

const Review = () => {

    const [loggedInUser, setLoggedInUser] = useContext( UserContext );
    const { register, handleSubmit, formState: { errors } } = useForm();
    const photo = loggedInUser.photo
    const onSubmit = ( data, e ) => {
        fetch( 'https://arcane-plateau-08997.herokuapp.com/review', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { ...data, photo: photo } )
        } )
            .then( res => res.json() )
            .then( data => {

                e.target.reset()
            } )
    };
    return (
        <div style={{ margin: "3em", width: "100%" }}>
            <form onSubmit={handleSubmit( onSubmit )}>
                <div style={{ marginBottom: "1em" }}>
                    <input defaultValue="" name="userName" placeholder="Enter title" {...register( "userName", { required: true } )} />
                    <br />
                    {errors.userName && <span style={{ color: 'red' }}>This field is required</span>}
                </div>
                <div style={{ marginBottom: "1em", }}>
                    <input defaultValue="" name="serviceName" placeholder="Service Name" {...register( "serviceName", { required: true } )} />
                    <br />
                    {errors.serviceName && <span style={{ color: 'red' }}>This field is required</span>}
                </div>
                <div style={{ marginBottom: "1em" }}>
                    <input style={{ height: "15vh" }} defaultValue="" name="review" placeholder="Description" {...register( "review", { required: true } )} />
                    <br />
                    {errors.review && <span style={{ color: 'red' }}>This field is required</span>}
                </div>

                <div>
                    <Button type="submit" variant="contained" color="secondary">
                        Submit
    </Button>
                </div>
            </form>

        </div>
    );
};

export default Review;