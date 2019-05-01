import React from 'react';

const Email = () => {
    return (
        <div>
            <div className="row my-2">
                <div className="col-3 p-1"><i className="fa fa-envelope" style={{ fontSize: "32px", color:"rgb(132,132,132)" }}></i></div>
                <div className="col-8 col-sm-9 p-1">
                    <hr className="m-0" />
                    <h3 className="text-left lead">guwahati@caddeskindia.com</h3>
                    <p className="text-left">Email</p>
                </div>
            </div>
        </div>
    );
};

export default Email;