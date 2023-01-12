import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import JSON from "./db.json";

import Header from "./components/header";
import NewsList from "./components/news_list";
import Footer from "./components/footer";

class App extends Component {
  state = {
    news: JSON,
    footerText:'This is Footer'
  };

  getkeywords = () => {
    console.log('hikeywqords')
  }

  render() {
    const { news,footerText } = this.state;
    return (
      <>
        <Header
          keywords = {this.getkeywords}
        />
        <NewsList news={news}>
          <br />
          <h2>This is children</h2>
        </NewsList> 
        <Footer footerText={ footerText} />
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
