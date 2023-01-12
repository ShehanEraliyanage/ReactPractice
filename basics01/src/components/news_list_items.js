import React from "react";

const Newsitems = ({ item }) => {

    return (
        
        <div className="news_item">
            <h3>{item.title}</h3>
            <div>{item.feed}</div>
        </div>
        
    )
}

export default Newsitems;