import React from "react";
import HomePageTitle from "../HomePageTitle";

class HomePage extends React.Component {
    render() {
        return(
            <div>
            <p>{this.props.firstName}</p>
            <HomePageTitle />
            </div>
        );      
    }
}

export default HomePage; 