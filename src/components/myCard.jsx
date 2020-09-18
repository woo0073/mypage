import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class MyCard extends Component {
  state = {
    name: this.props.name,
    link: this.props.link,
    imgURL: this.props.imgURL,
    text: this.props.text,
  };

  styles = {
    width: "50rem",
    marginTop: "30px",
  };
  title_styles = { fontWeight: "bold" };

  render() {
    return (
      <Card style={this.styles}>
        {/* <Card.Img variant="top" src={imgRender} /> */}
        <Card.Body>
          <Card.Title style={this.title_styles}>{this.state.name}</Card.Title>
          <Card.Text>{this.props.text}</Card.Text>
          <Card.Link href={this.state.link} variant="primary">
            Go for watch!
          </Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default MyCard;
