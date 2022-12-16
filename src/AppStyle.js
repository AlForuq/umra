import styled from "styled-components";

const media = {
  mobile: `@media(max-width:480px)`,
  tablet: `@media(max-width:768px)`,
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 1440px;

  font-family: sans-serif;

  ${media.mobile} {
    width: 480px;
  }

  ${media.tablet} {
    width: 768px;
  }
`;
