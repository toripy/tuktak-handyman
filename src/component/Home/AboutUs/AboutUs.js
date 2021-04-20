import React from 'react';



const AboutUs = () => {
    return (
        <div className="container" style={{ height: "20em", marginTop: "10em" }}>
            <div className="row m-5 " >
                <div className="col-md-3" style={{ borderRight: '0.1em solid tomato', }}>
                    <h1>ABOUT US</h1>
                    <h1 style={{ color: "tomato" }}>WELCOME</h1>
                </div>

                <div className="col-md-7 ms-5"  >
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium quam amet enim illum doloremque voluptatibus eligendi dolore necessitatibus architecto!</h4>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;