import React from 'react';
import {
    Button,
} from "@material-ui/core";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = ( email, e ) => {
        fetch( 'https://arcane-plateau-08997.herokuapp.com/admin', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( email )
        } )
            .then( res => res.json() )
            .then( data => {
                e.target.reset()
            } )
    };


    return (
        <div style={{ margin: "2em" }} >
            <label >Service Title</label>
            <form onSubmit={handleSubmit( onSubmit )}>
                <div >
                    <input style={{ width: "30em" }} defaultValue="" name="email" placeholder="Enter email" {...register( "email", { required: true } )} />
                </div>

                {errors.email && <span style={{ color: "red" }}>This field is required</span>}
                <br />
                <div>
                    <Button type="submit" variant="contained" color="secondary">
                        Submit
                </Button>
                </div>
            </form>

        </div>
    );
};

export default MakeAdmin;