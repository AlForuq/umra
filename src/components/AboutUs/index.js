import React from "react";
import {
  Card,
  CarouselDiv,
  Container,
  MainWrapper,
  Text,
  Title,
  Wrapper,
} from "./style";
import kaba from "../../assets/images/kaba.png";
import airport from "../../assets/images/airport.png";
import location from "../../assets/images/location.png";
import calendar from "../../assets/images/calendar.png";
import { Carousel } from "../Courosel";

export const AboutUs = () => {
  return (
    <Container id="aboutUs">
      <Title>"SHEYX TRAVEL" haqida</Title>

      <MainWrapper>
        <CarouselDiv>
          <Carousel />
        </CarouselDiv>

        <Wrapper>
          <Card>
            <img alt="" src={kaba} />
            <Text>
              <span>UMRA ZIYORATI</span> {new Date().getFullYear()}
            </Text>
          </Card>
          <Card>
            <img alt="" src={calendar} />
            <Text>
              <span>14 kunlik</span> Muborak Umra
            </Text>
          </Card>
          <Card>
            <img alt="" width={"80px"} src={location} />
            <Text>
              <span>ANDIJONdan</span> olib ketib, <span>ANDIJONga</span> olib
              kelinadi{" "}
            </Text>
          </Card>
          <Card>
            <img alt="" src={airport} />
            <Text>
              Uchib ketish tartibi: <span>O’SH shahridan</span>{" "}
            </Text>
          </Card>
        </Wrapper>
      </MainWrapper>
    </Container>
  );
};
