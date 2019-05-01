import React from 'react';

const SocialMedia = () => {
    return (
        <div>
            <div className="row my-2">
                <div className="col-12 p-1">
                    <h5 className="text-left pl-3">Social Media</h5>
                    <div className="d-flex justify-content-start">
                        <i className="fa fa-facebook p-2 m-2" style={{ fontSize: "40px" }}></i>
                        <i className="fa fa-instagram p-2 m-2" style={{ fontSize: "40px" }}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;