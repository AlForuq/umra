import styled from "styled-components";

const media = {
  mobile: `@media(max-width:480px)`,
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;
  justify-content: center;
  align-items: center;
  background-color: green;
  padding: 70px 50px;

  box-sizing: border-box;

   ${media.mobile} {
    padding: 20px 0px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;

  ${media.mobile} {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CarouselDiv = styled.div`
  border-right: 1px solid white;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.mobile} {
    border: none;
  }
`;

export const Title = styled.div`
  color: white;
  font-size: 60px;

  ${media.mobile} {
    font-size: 30px;
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  border-left: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 50%;
  padding: 30px 30px;

  ${media.mobile} {
    border-left: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* padding: 0px 0px; */
    gap:20px
  }
`;
export const Card = styled.div`
  box-sizing: border-box;
  border: 1px solid white;
  width: 250px;
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 30px;
  gap: 20px;

  background-color: white;
  border-radius: 30px;

  span {
    color: green;
  }

  ${media.mobile} {
    width: 230px;
    height: 200px;
    padding: 20px 20px;
    border: none;
    
  }
`;
export const Text = styled.div`
  font-size: 20px;
  font-family: sans-serif;
  text-align: center;
  font-weight: 600;
`;
export const Div = styled.div``;
