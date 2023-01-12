import React from "react";
import Newsitem from "./news_list_items"

const newsList = (props) => {
  
  const news = props.news.map((items) => (

    <Newsitem item={items } key={items.id} name='my ' age='sasa' />
  ));

    return(
    <>
        {news}
        {props.children}
    </>
    )
};

export default newsList;
