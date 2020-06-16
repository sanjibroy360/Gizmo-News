import React from "react";

class NewsCard extends React.Component {
    constructor() {
        super();

    }
    
    componentDidMount(){
        fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=3c661e5df6d243708cfe9324fcf60eef")
        .then(res => res.json())
        .then(data => {console.log(data)})
        .catch(error => console.log({error}));
    }

    render() {
        return (
            <>

            </>
        )
    }
}
