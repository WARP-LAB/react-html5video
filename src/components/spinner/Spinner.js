import React from 'react';

var Spinner = React.createClass({

    render() {
        return (
            <div className="video-spinner">
                <div className="video-spinner__rect1"></div>
                <div className="video-spinner__rect2"></div>
                <div className="video-spinner__rect3"></div>
                <div className="video-spinner__rect4"></div>
                <div className="video-spinner__rect5"></div>
            </div>
        );
    }

});

export default Spinner;
