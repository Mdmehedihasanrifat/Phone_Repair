import React from 'react';

import image from './after.jpg'

const About = () => {
    return (

        <div className="row bg-white">
             <div className="col-md-6 mx-1 pt-1">
                 <img src={image} className="img-fluid"/>


             </div>
            <div className="col-md-5 pt-1 d-block my-auto font-weight-bold ">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci doloremque dolorum eius harum, nam nostrum quo repellendus sint? Accusantium atque blanditiis debitis ea libero officiis quidem, velit? Aperiam culpa debitis,
                    deserunt dolorem error, et expedita iure, laboriosam porro quis veniam?</p>
            </div>
            
        </div>

    );
};

export default About;