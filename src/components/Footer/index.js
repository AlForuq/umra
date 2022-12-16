import React from "react";
import {
  SubContainer,
  SubTitle,
  Number,
  Wrapper,
  Phone,
  IconWrapper,
  Telegram,
  Instagram,
  TelegramGroup,
  BottomFooter,
  Address,
  Container,
  Location,
  MainButton,
  Div,
} from "./style";

export const Footer = () => {
  return (
    <Container id="contact">
      <SubContainer>
        <Wrapper>
          <SubTitle>
            <span>
              <Phone />
            </span>{" "}
            Murojaat uchun telefonlar:
          </SubTitle>
          <Number>+998 91 160 02 62</Number>
          <Number>+998 95 307 00 27</Number>
          <Number>+998 95 402 00 27</Number>
        </Wrapper>

        <Wrapper>
          <SubTitle>Ijtimoiy sahifalarimiz:</SubTitle>

          <IconWrapper>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://t.me/sheyxtravel_uz"
            >
              <Telegram />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://t.me/SheyxTravel"
            >
              <TelegramGroup />
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/sheyx_travel/"
            >
              <Instagram />
            </a>
          </IconWrapper>
        </Wrapper>
      </SubContainer>

      <BottomFooter>
        <Address>
          <span>
            <Location />
          </span>
          <div>
            Andijon shahar BOBURSHOH ko’chasi;
            <div>MO'LJAL: 2-tug’ruqxona, Stomotologiya atrofida.</div>
          </div>
        </Address>

        <Div className="Div">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://t.me/Umravaxaj1"
          >
            <MainButton>Biz bilan Bog'laning</MainButton>
          </a>
        </Div>
      </BottomFooter>
    </Container>
  );
};
