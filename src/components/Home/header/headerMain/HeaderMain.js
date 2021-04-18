import React from 'react';
import image from '../headerMain/photo-1605248064528-0091e98ef0a8.webp'
import './headerMain.css'
const HeaderMain = () => {
    const styleImg={

        "width":"80%",
        "border-radius":"10px"
    }

    return (
        <div className="Container">
        <div className="row d-flex align-items-center justify-content-center" id="RowItem">
            <div className="col-md-4 offset-1 text-white text-center  ">
                <h2 className="display-4">Service your Phone</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium dolorem dolores inventore magnam magni nam nemo nisi nostrum sit, suscipit?</p>
                <button className="btn btn-success btn-lg">Learn more</button>
            </div>
            <div className="col-md-6 my-4">

                <img src={image} style={styleImg} className="img-fluid"></img>

            </div>

        </div>
        </div>
    );
};

export default HeaderMain;