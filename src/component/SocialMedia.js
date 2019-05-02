import React from 'react';

const SocialMedia = () => {
    return (
        <div>
        <div className="row my-2 mt-4">
                <div className="col-3 p-1">
                <i className="fa fa-share-alt" style={{ fontSize: "32px", color:"rgb(132,132,132)" }}></i>
                </div>
                <div className="col p-1">
                    
                    <p className="text-left">Social Media</p>
                    <div className="d-flex justify-content-start">
                    <a href="https://www.facebook.com/caddeskguwahati">
                        <i className="fa fa-facebook p-2 m-2 d-flex" 
                        style={{ cursor:"pointer", fontSize: "30px", backgroundColor: "#3b5998",color:"#fff", width:"50px", height: "50px", borderRadius: "50%", justifyContent:"center",alignItems:"center"}}></i>
                    </a>
                    <a href="https://www.instagram.com/caddeskguwahati9/">
                        <i className="fa fa-instagram p-2 m-2 d-flex" 
                        style={{ cursor:"pointer", fontSize: "30px", backgroundColor:"#e1306c" ,color:"#fff", width:"50px", height: "50px", borderRadius: "50%", justifyContent:"center",alignItems:"center"}}></i>
                    </a>
                        </div>
                </div>
            </div>
            
        </div>
    );
};

export default SocialMedia;