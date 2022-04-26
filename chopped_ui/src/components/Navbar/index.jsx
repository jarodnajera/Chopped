import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks, 
  NavBtn, 
  NavBtnLink,
  NavImg,
  NavLinksPage
} from './NavbarElements';


const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavImg><img src="/src/images/CHOPPED!.png" alt="CHOPPED" width="75"/></NavImg>
          <NavLogo to="/">CHOPPED</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home">Home</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavLinksPage to="recipes">Recipes</NavLinksPage>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar