
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../../App';

const Service = ( { service } ) => {
    const history = useHistory()
    const [loggedInUser, setLoggedInUser] = useContext( UserContext );
    const handleClick = () => {
        setLoggedInUser( { ...loggedInUser, service: service.serviceName } )
        history.push( "/dashboard" )

    }
    return (
        <div className="col-md-4 mt-5 mb-5">
            <div className="card ">
                <img style={{ width: "100%", height: "50vh" }} src={`data:${service.image.contentType};base64,${service.image.img}`} alt="" />

                <div className="card-body" style={{ height: "200px" }}>
                    <h2 className="card-title text-center">{service.serviceName}</h2>
                    <p className="card-text">{service.description}</p>
                </div>
                <button onClick={handleClick} type="button" className="btn btn-warning  ">Order Now</button>
            </div>
        </div>
    );
};

export default Service;