import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import HandymanTools from '../../../../image/icon/handyman-tools.svg'
import Avatar from '@material-ui/core/Avatar';



const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext( UserContext );

    return (
        <nav className="navbar  navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/home">
                    <img className="img-fluid me-4" style={{ width: "4em" }} src={HandymanTools} alt="" />
                    <h1>Tuki<span style={{ color: "tomato" }}>Taki</span></h1>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-style navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <Link className="nav-link active me-5" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5" to="/portfolio">Our Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5" to="/ourTeam">Our Team</Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className="nav-link" to="/contactUs">Contact Us</Link>
                        </li>
                        {loggedInUser.email && <li className="nav-item me-5">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>}

                        {loggedInUser.email ?
                            <Avatar alt={loggedInUser.name} src={loggedInUser.photo} /> :
                            <Link to="/login">
                                <button type="button" className="me-5 btn btn-danger">Login</button>
                            </Link>
                        }

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;