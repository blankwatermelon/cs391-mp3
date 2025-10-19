import { Link } from 'react-router';
import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }
`;

// Color palette theme
export const theme = {
  cordovan: '#984447ff',
  uranianBlue: '#add9f4ff',
  trueBlue: '#476c9bff',
  blueMunsell: '#468c98ff',
  richBlack: '#101419ff',
};

export const PageWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    text-align: center;
    background-color: ${theme.uranianBlue};
    color: ${theme.richBlack};
    font-family: 'Roboto', sans-serif;
    font-size: calc(14px + 0.3vw);

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

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

export const StyledFooter = styled.footer`
  background-color: ${theme.trueBlue};
  color: ${theme.uranianBlue};
  text-align: left;
  padding-left: 4%;
  font-size: calc(10px + 0.3vw);
`;

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