import React from "react";

const newsList = (props) => {
  
  const news = props.news.map((items) => (
    <div key={items.id}>
      <h3>{items.title}</h3>
      <div>{items.feed}</div>
    </div>
  ));

    return(
    <>
        {news}
    </>
    )
};

export default newsList;
