import React, { Component } from 'react';
import Logo from '../images/svg.svg'

class TopContainer extends Component {
    render() {
        return (
            <div>
                <div className="TopContainer">
                    <div className="col-12 offset-0 text-center mx-auto col-md-6 pt-3">
                        <div className="mt-4 shadowTopContainer p-3">
                            <img className="img-fluid logoMaxHeight" src={Logo} alt="CAD DESK Guwahati" />
                            <h1 className="mb-0 mt-3" style={{ color: "#ffffff" }}>CAD DESK</h1>
                            <p className="mb-0" style={{ color: "#ffffff" }}>INSTITUTE</p>
                            <div className="row fontColor mt-3">
                                <div className="col-4 col-sm-4 col-md-4 mx-0 px-0 smborder borderLeft p-2" style={{ cursor: "pointer" }}>
                                    <a href="tel:+918638270013">
                                        <i className="fa fa-phone" style={{ fontSize: "20px", marginBottom: "8px" }}></i>
                                        <h6>CALL</h6>
                                    </a>
                                </div>
                                <div className="col-4 col-sm-4 col-md-4 mx-0 px-0 smborder p-2">
                                    <a href="mailto:guwahati@caddeskindia.com">
                                        <i className="fa fa-send" style={{ fontSize: "20px", marginBottom: "8px" }}></i>
                                        <h6>EMAIL</h6>
                                    </a>
                                </div>
                                <div className="col-4 col-sm-4 col-md-4 mx-0 px-0 smborder borderRight p-2">
                                    <i className="fa fa-map-marker" style={{ fontSize: "20px", marginBottom: "8px" }}></i>
                                    <h6>DIRECTIONS</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopContainer;