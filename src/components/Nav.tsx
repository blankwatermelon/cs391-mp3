import { StyledNav, StyledNavUl, StyledNavLi, StyledNavLink  } from "./styles";

export default function Nav() {
  return (
    <StyledNav>
        <StyledNavUl>
            {/* dynamic navigation links using routing instead of hard coding like in html */}
            <StyledNavLi><StyledNavLink to={'/'}>Home</StyledNavLink></StyledNavLi>
            <StyledNavLi><StyledNavLink to={'/experience'}>Experience</StyledNavLink></StyledNavLi>
            <StyledNavLi><StyledNavLink to={'/education'}>Education</StyledNavLink></StyledNavLi>
            <StyledNavLi><StyledNavLink to={'/references'}>References</StyledNavLink></StyledNavLi>
            <StyledNavLi><StyledNavLink to={'/achievements'}>Achievements</StyledNavLink></StyledNavLi>
            <StyledNavLi><StyledNavLink to={'/projects'}>Projects</StyledNavLink></StyledNavLi>
        </StyledNavUl>
    </StyledNav>
  )
}
