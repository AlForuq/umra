import React from "react";

import { Container, MainButton, MainInfo, Title } from "./style";

export const Main = () => {
  return (
    <Container id="main" >
      {/* <Header /> */}
      <MainInfo>
        <Title>Sheyx Travel</Title>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://t.me/Umravaxaj1"
        >
          <MainButton>Biz bilan Bog'laning</MainButton>
        </a>
      </MainInfo>
    </Container>
  );
};
