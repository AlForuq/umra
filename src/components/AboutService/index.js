import React, { useState } from "react";
import { Card } from "../Cards";
import { Container, Title, Wrapper } from "./style";
import { data } from "../../data/index";

export const AboutService = () => {
  // eslint-disable-next-line
  const [info, setInfo] = useState(data);

  return (
    <Container id="aboutService">
      <Title>Bizning Xizmatlar</Title>
      <Wrapper>
        {info.map((item) => {
          return <Card item={item} />;
        })}
      </Wrapper>
    </Container>
  );
};
