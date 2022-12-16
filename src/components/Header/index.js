import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.JPG";
import {
  Contact,
  Container,
  Li,
  Logo,
  MenuIcon,
  MobileLi,
  MobileUl,
  MobileWrapper,
  Ul,
  Wrapper,
} from "./style";
import { Link } from "react-scroll";
import "./style.css";

export const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 1 ||
        document.documentElement.scrollTop > 1
      ) {
        headerRef.current.classList.add("header_shrink");
      } else {
        headerRef.current.classList.remove("header_shrink");
      }
    });
    // return ()=> window.removeEventListener('scroll')
  }, []);

  const mobile = window.innerWidth <= 768 ? true : false;
  const [barClosed, setBarClosed] = useState(true);

  return (
    <Container className="" ref={headerRef}>
      <Link to="main" span={true} smooth={true}>
        <Logo src={logo} />
      </Link>
      {mobile ? (
        <MobileWrapper barClosed={barClosed}>
          {barClosed ? (
            <MenuIcon onClick={() => setBarClosed(false)} />
          ) : (
            <MobileUl>
              <Link
                to="aboutUs"
                span={true}
                smooth={true}
                onClick={() => setBarClosed(true)}
              >
                <MobileLi>Biz Haqimizda</MobileLi>
              </Link>

              <>
                <Link
                  to="aboutService"
                  span={true}
                  smooth={true}
                  onClick={() => setBarClosed(true)}
                >
                  <MobileLi>Xizmatlar</MobileLi>
                </Link>
              </>
              <>
                <Link
                  to="gifts"
                  span={true}
                  smooth={true}
                  onClick={() => setBarClosed(true)}
                >
                  <MobileLi>Sovg'alar</MobileLi>
                </Link>
              </>
            </MobileUl>
          )}
        </MobileWrapper>
      ) : (
        <Wrapper>
          <Ul>
            <Link to="aboutUs" span={true} smooth={true}>
              <Li>Biz Haqimizda</Li>
            </Link>
            <Link to="aboutService" span={true} smooth={true}>
              <Li>Mizning Xizmatlar</Li>
            </Link>
            <Link to="gifts" span={true} smooth={true}>
              <Li>Sovg'alar</Li>
            </Link>
          </Ul>
        </Wrapper>
      )}{" "}
      <Link to="contact" span={true} smooth={true}>
        <Contact>Aloqa</Contact>
      </Link>
    </Container>
  );
};
