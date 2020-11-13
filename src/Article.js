import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import style from "./recipe.module.css";
import { Row, Col, Alert } from "reactstrap";
import "react-circular-progressbar/dist/styles.css";
const Article = ({ title, tweets, score, url }) => {
  return (
    <div className="container">
      <div className="row">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
        />
        <a href={url} style={{ fontSize: "50px" }}>
          {title}
        </a>

        <Row>
          <Col>
            <h2>Accuracy rate:{score.toFixed(2)}</h2>
          </Col>

          <br />

          <Col>
            <h3>Total Number of Tweets and Retweets: {tweets}</h3>
          </Col>
        </Row>

        <div>
          <CircularProgressbar
            value={score}
            text={`${score}%`}
            styles={{ text: { fontSize: "5px" } }}
          />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Article;
