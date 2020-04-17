import React from 'react';
import './style.css'

class Banner extends React.Component {

    render() {
        return(
            <div className="filmHeader">
            <img src={require('./film.png')} />

</div>
        );
    }

}

export default Banner;