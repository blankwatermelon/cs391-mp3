import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Routes, Route } from "react-router"; // object destructuring with currly braces( reduce code verbosity)
import Home from "./mains/Home";
import Ref from "./mains/Ref";
import Edu from "./mains/Edu";
import Exp from "./mains/Exp";
import Proj from "./mains/Proj";
import Achieve from "./mains/Achieve";
import { PageWrapper, Container, GlobalStyles } from "./styles";

export default function Root() {
  return (
    <>
      <GlobalStyles />
      <PageWrapper>
        <Header />
        <Container>
          <Nav />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/education"} element={<Edu />} />
            <Route path={"/experience"} element={<Exp />} />
            <Route path={"/projects"} element={<Proj />} />
            <Route path={"/references"} element={<Ref />} />
            <Route path={"/achievements"} element={<Achieve />} />
          </Routes>
        </Container>
        <Footer />
      </PageWrapper>
    </>
  );
}
