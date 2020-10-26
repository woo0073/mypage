import React, { Component } from "react";
import my_image from "./jihye.png";
import { Figure } from "react-bootstrap";
import MyWebsites from "./myWebsites";
import { FcLike } from "react-icons/fc";

class MyProfile extends Component {
  state = { imgURL: "./jihye.png" };
  styles = { marginLeft: "10px" };
  render() {
    return (
      <Figure>
        <Figure.Image width={171} height={180} src={my_image} roundedCircle />
        <Figure.Caption>
          <p style={{ fontWeight: "bold" }}>우지혜 (Jihye Woo)</p>
          <p>계속 성장하고 싶은 개발자 <FcLike/></p>
          
          <MyWebsites />
          
        </Figure.Caption>
      </Figure>
    );
  }
}

export default MyProfile;
