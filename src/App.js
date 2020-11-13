import React, { useState, useEffect } from "react";
import { Jumbotron, Alert } from "reactstrap";
//import "./App.css";
import Article from "./Article";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(
    "pine AND date_published:[2016-10-28 TO 2016-12-04]"
  );
  useEffect(() => {
    getArticles();
  }, [query]);
  const getArticles = async () => {
    const response = await fetch(
      `https://api-hoaxy.p.rapidapi.com/articles?sort_by=relevant&query=${query}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "api-hoaxy.p.rapidapi.com",
          "x-rapidapi-key":
            "6bab85c23amsh4717ab1e4bfe223p10802djsn301a3b4c5444",
        },
      }
    );
    const data = await response.json();
    console.log(data.articles);
    setArticles(data.articles);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <React.Fragment>
        <Jumbotron style={{ backgroundColor: "black" }}>
          <div className="container">
            <h1
              className="display-3"
              style={{
                textAlign: "center",
                color: "#DCDCDC",
                fontSize: "80px",
                letterSpacing: "5px",
              }}
            >
              Hoaxy
            </h1>
            <br />
            <p
              style={{
                color: "#DCDCDC",
                marginTop: "10px",
                textAlign: "center",
                fontSize: "25px",
                fontWeight: "30px",
                wordSpacing: "10px",
                letterSpacing: "5px",
              }}
            >
              The Fake News Generator Website
            </p>
          </div>
          <div style={{ marginLeft: "800px" }}>
            <form className="search-form" onSubmit={getSearch}>
              <input
                className="search-bar"
                type="text"
                style={{
                  borderRadius: "40px",
                  height: "39px",
                  width: "500px",
                }}
                onChange={updateSearch}
              />
              <br />
              <button
                type="submit"
                className="fa fa-search fa-xl"
                style={{
                  marginLeft: "180px",
                  marginTop: "20px",
                  fontSize: "25px",
                }}
              >
                Search News
              </button>
            </form>
          </div>
        </Jumbotron>
        <h1 style={{ textAlign: "center" }}>
          <Alert color="success">Publishing results for {query}</Alert>
        </h1>
        <div className="Article">
          {articles.map((article) => (
            <Article
              url={article.canonical_url}
              title={article.title}
              tweets={article.number_of_tweets}
              score={article.score}
            />
          ))}
        </div>
      </React.Fragment>
    </div>
  );
};

export default App;
