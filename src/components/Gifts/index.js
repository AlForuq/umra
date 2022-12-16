import React from "react";
import { Card, Container, Text, Title, Wrapper } from "./style";

import quran from "../../assets/images/quran96.png";
import zazam96 from "../../assets/images/zamzam96.png";
import newbriefcase from "../../assets/images/newbriefcase96.png";
import suit from "../../assets/images/suit100.png";
import waistcoat96 from "../../assets/images/waistcoat96.png";

export const Gifts = () => {
  return (
    <Container id="gifts">
      <Title>Sovg'alar</Title>

      <Wrapper>
        <Card>
          <img alt="" src={quran} />
          <Text>Quron</Text>
        </Card>
        <Card>
          <img alt="" src={zazam96} />
          <Text>Zam Zam </Text>
        </Card>
        <Card>
          <img alt="" src={newbriefcase} />
          <Text>Sumka</Text>
        </Card>
        <Card>
          <img alt="" src={waistcoat96} />
          <Text>Nimcha</Text>
        </Card>
        <Card>
          <img alt="" src={suit} />
          <Text>Peyjak</Text>
        </Card>
      </Wrapper>
    </Container>
  );
};
