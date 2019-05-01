import React from 'react';
import Reasons from './Reasons'
import Mobile from './Mobile';
import Email from './Email';
import Location from './Location';
import Website from './Website';
import SocialMedia from './SocialMedia';

const SecondContainer = () => {
    return (
        <div className="TopContainers">
        <div className="col-12 offset-0 text-center mx-auto col-md-6 px-3">
            <div className="shadowTopContainer p-3">
                <Reasons/>
                <Mobile/>
                <Email/>
                <Location/>
                <Website/>
                <SocialMedia/>
            </div>
        </div>
    </div>
    );
};

export default SecondContainer;