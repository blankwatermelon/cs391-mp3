import { Link } from "react-router";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }
`;

// Color palette theme
export const theme = {
  cordovan: "#984447ff",
  uranianBlue: "#add9f4ff",
  trueBlue: "#476c9bff",
  blueMunsell: "#468c98ff",
  richBlack: "#101419ff",
};

// page wrapper
export const PageWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
  text-align: center;
  background-color: ${theme.uranianBlue};
  color: ${theme.richBlack};
  font-family: "Roboto", sans-serif;
  font-size: calc(14px + 0.3vw);

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

// container
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

// header
export const StyledHeader = styled.header`
  background-color: ${theme.trueBlue};
  color: ${theme.uranianBlue};
  text-align: left;
  padding-left: 4%;
  padding-top: 1%;
  font-size: calc(20px + 0.3vw);

  @media screen and (max-width: 750px) {
    text-align: center;
    padding-left: 0;
  }
`;

// footer
export const StyledFooter = styled.footer`
  background-color: ${theme.trueBlue};
  color: ${theme.uranianBlue};
  text-align: left;
  padding-left: 4%;
  font-size: calc(10px + 0.3vw);
`;

// nav styling
export const StyledNav = styled.nav`
  background-color: ${theme.blueMunsell};
  width: 30%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 750px) {
    width: 100%;
    padding: 10px 0;
  }
`;

export const StyledNavUl = styled.ul`
  padding-left: 0;
  list-style: none;
  width: 80%;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 750px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`;

export const StyledNavLi = styled.li`
  border: 4px solid ${theme.cordovan};
  margin-top: 20%;
  padding: 5%;
  width: 100%;
  background-color: ${theme.uranianBlue};
  font-size: calc(16px + 0.3vw);

  @media screen and (max-width: 750px) {
    margin: 5px;
    padding: 8px 12px;
    width: auto;
    min-width: 80px;
    font-size: calc(14px + 0.3vw);
  }
`;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: ${theme.richBlack};
`;

// main styling
export const StyledMain = styled.main`
  min-height: 100vh;
  width: 70%;
  text-align: left;
  margin-left: 0;
  margin-top: 1%;

  @media screen and (max-width: 750px) {
    width: 100%;
    padding: 2% 3%;
    height: auto;
  }
`;

export const StyledImg = styled.img`
  float: left;
  margin-left: 3%;
  margin-right: 3%;
  max-width: 40%;
  height: auto;
  border: 6px solid ${theme.cordovan};

  @media screen and (max-width: 750px) {
    float: none;
    display: block;
    margin: 0 auto 20px auto;
    max-width: 80%;
    padding: 0;
  }
`;

export const StyledMainH1 = styled.h1`
  text-align: center;
  margin-top: 1%;
  margin-bottom: 2%;
  font-size: calc(30px + 0.3vw);

  @media screen and (max-width: 750px) {
    font-size: calc(40px + 0.5vw);
    margin-bottom: 3%;
  }
`;

export const StyledMainH2 = styled.h2`
  margin-left: 1%;
  font-size: calc(26px + 0.3vw);
  margin-bottom: 2%;
  text-align: center;
  color: ${theme.trueBlue};
`;

export const StyledMainP = styled.p`
  text-align: left;
  line-height: 1.6;
  font-size: calc(16px + 0.3vw);
  margin-left: 3%;

  @media screen and (max-width: 750px) {
    font-size: calc(14px + 0.5vw);
    padding: 0 2%;
  }
`;

export const CourseWorkList = styled.ul`
  list-style: none;
  text-align: left;
  padding-bottom: 2%;
`;

export const StyledH2 = styled.h2`
  margin-left: 1%;
  font-size: calc(26px + 0.3vw);
  margin-bottom: 2%;
  margin-top: 3%;
  text-align: left;
  color: ${theme.trueBlue};
`;

export const StyledH3 = styled.h3`
  margin-left: 5%;
  font-size: calc(20px + 0.3vw);
  margin-bottom: 1%;
  margin-top: 2%;
  text-align: left;
  color: ${theme.cordovan};
`;

export const ExpList = styled.ul`
  margin-left: 5%;
`;

export const StyledEduP = styled.p`
  text-align: left;
  line-height: 1.6;
  font-size: calc(14px + 0.3vw);
  margin-left: 3%;

  @media screen and (max-width: 750px) {
    font-size: calc(12px + 0.5vw);
    padding: 0 2%;
  }
`;

// calc styling

// Calculator styles
export const CalcDiv = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 4% auto;
  padding: 3%;
  background-color: ${theme.uranianBlue};
  border: 3px solid ${theme.cordovan};
  border-radius: 10px;
  font-family: "Roboto", sans-serif;

  @media screen and (max-width: 750px) {
    margin: 2% auto;
    padding: 4%;
    max-width: 95%;
  }
`;

export const CalcDisplayH3 = styled.h3`
  text-align: center;
  color: ${theme.trueBlue};
  font-size: calc(20px + 0.4vw);
  margin-bottom: 3%;
`;

export const CalcInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2%;
  margin-bottom: 4%;

  @media screen and (max-width: 750px) {
    gap: 3%;
  }
`;

export const CalcLabel = styled.label`
  font-weight: 500;
  color: ${theme.richBlack};
  font-size: calc(14px + 0.3vw);
  margin-bottom: 1%;
`;

export const CalcInput = styled.input`
  padding: 2% 3%;
  border: 2px solid ${theme.blueMunsell};
  border-radius: 5px;
  font-size: calc(16px + 0.3vw);
  font-family: "Roboto", sans-serif;
  background-color: white;
  color: ${theme.richBlack};
  max-width: 100%;
`;

export const CalcOutputH3 = styled.h3`
  h3 {
    color: ${theme.trueBlue};
    font-size: calc(16px + 0.3vw);
    margin-bottom: 2%;
    text-indent: 0;
  }
`;
export const CalcOutputP = styled.p`
  p {
    font-size: calc(18px + 0.4vw);
    color: ${theme.richBlack};
    margin: 0;
    padding: 2%;
    background-color: #f9f9f9;
    border-radius: 5px;
    min-height: 40px;
    display: flex;
    align-items: center;
  }
`;

export const CalcButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  justify-content: center;
  margin-bottom: 4%;

  @media screen and (max-width: 750px) {
    gap: 3%;
  }
`;

export const CalcButton = styled.button`
  min-width: 60px;
  padding: 3% 2%;
  border: 2px solid ${theme.trueBlue};
  border-radius: 8px;
  background-color: ${theme.blueMunsell};
  color: white;
  font-size: calc(16px + 0.3vw);
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;
