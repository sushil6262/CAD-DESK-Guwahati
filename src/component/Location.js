import React from 'react';

const Location = () => {
    return (
        <div>
            <div className="row my-2">
                <div className="col-3 p-1"><i className="fa fa-map-marker" style={{ fontSize: "32px", color:"rgb(132,132,132)" }}></i></div>
                <div className="col p-1">
                    <hr className="m-0" />
                    <h3 className="text-left lead">Noonmati last gate opposite Axom Jatiya Vidalaya</h3>
                    <a href="https://maps.app.goo.gl/gFc3a9jp5weUjygR6">
                        <p className="text-left" style={{color: "#419efb",fontWeight: "bold"}}>SHOW ON MAP</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Location;