import React from "react";
import { Container, Title } from "./style";

export const Card = ({ item }) => {
  return (
    <Container>
      <div>{item.icon}</div>
      <Title>{item.title}</Title>
    </Container>
  );
};
