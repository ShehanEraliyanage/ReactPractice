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
  render() {
    const { news,footerText } = this.state;
    return (
      <>
        <Header />
        <NewsList news={news} />
        <Footer footerText={ footerText} />
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
