import React from "react";
import jumboData from "../fixtures/jumbo.json";
import Jumbotron from "../components/jumbotron/index";
import {
  JumbotronContainerParent,
  JumbotronPane,
  JumbotronTitle,
  JumbotronSubtitle,
  JumbotronImage,
} from "../components/jumbotron/index";

function JumbotronContainer() {
  return (
    <JumbotronContainerParent>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <JumbotronPane>
            <JumbotronTitle>{item.title}</JumbotronTitle>
            <JumbotronSubtitle>{item.subTitle}</JumbotronSubtitle>
          </JumbotronPane>
          <JumbotronPane>
            <JumbotronImage src={item.image} alt={item.alt}></JumbotronImage>
          </JumbotronPane>
        </Jumbotron>
      ))}
    </JumbotronContainerParent>
  );
}

export default JumbotronContainer;
