import React from "react";
import TrendingNews from "./trendingNews.jsx";

class Hero extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            filter : this.props.filter
        }
    }
  
    render() {
        return (
                <>
                    
                    <TrendingNews />
                </>
            )
        
    }
}

export default Hero;

