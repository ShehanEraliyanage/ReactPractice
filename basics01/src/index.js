import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import JSON from "./db.json";

import Header from "./components/header";
import NewsList from "./components/news_list";
import Footer from "./components/footer";
import Life from "./components/lifeCycle";


class App extends Component {
  state = {
    news: JSON,
    filtered:JSON,
    footerText: 'This is Footer',
    active:true
  };

  getkeywords = (event) => {
    let keywords = event.target.value;
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keywords) > -1;
     
    })
    this.setState({
       filtered
     })
  }

  render() {
    const { news,footerText,filtered,active } = this.state;
    return (
      <>
        <Header
          keywords = {this.getkeywords}
        />
        {/* <NewsList news={filtered}>
          <br />
          <h2>This is children</h2>
        </NewsList>  */}
        {active ? <Life />
          : null
        
        }
        
        <button onClick={()=>this.setState({active:!active})}>Click Here</button>


        <Footer footerText={ footerText} />
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
