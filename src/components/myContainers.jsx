import React, { Component } from "react";
import MyCard from "./myCard";

class MyContainers extends Component {
  state = {
    links: [
      {
        name: "LevelBuilder",
        link: "https://github.com/woo0073/CSE416",
        imgURL: "",
        text: "웹 버전 게임 맵 에디터 (Spring Boot)",
      },
      {
        name: "해커톤",
        link: "https://devpost.com/woo0073/challenges",
        imgURL: "./img/sbuHack19.jpg",
        text:
          "Stony Brook AR navigation - Android App ( Big Bang Hacks Award, MLH Google Cloud Award 수상)",
      },
      {
        name: "논문 작업_한국",
        link: "",
        imgURL: "",
        text:
          " 한국 정보보호학회18 에서 논문 '사용자의 공인인증서에 관한 인식과 브라우저 선택에 미치는 영향 연구'에 참여하여 국가보안기술연구소 소장상 수상",
      },
      {
        name: "논문 작업_영문",
        link: "https://link.springer.com/chapter/10.1007/978-3-030-54455-3_1",
        imgURL: "",
        text:
          "논문 '사용자의 공인인증서에 관한 인식과 브라우저 선택에 미치는 영향 연구'을 더 추가적으로 연구하여 논문 'Tale of Two Browsers: Understanding Users’ Web Browser Choices in South Korea'이 AisaUSEC20에 게재",
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.links.map((element) => (
          <MyCard
            link={element.link}
            name={element.name}
            imgURL={element.imgURL}
            text={element.text}
          />
        ))}
      </div>
    );
  }
}

export default MyContainers;
