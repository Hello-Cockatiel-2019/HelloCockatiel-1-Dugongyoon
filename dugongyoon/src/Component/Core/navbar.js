import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';
const Nav1 = styled.div`
    margin-left: 3%;
    margin-right: 3%;
    padding-bottom:2%;
    padding-top:2%;
`;
const Nav2 = styled.div`
    padding-left: 3rem;
    padding-right: 3rem;
`
const Text1 = styled.div`
        @import url('https://fonts.googleapis.com/css?family=Mitr&display=swap');
        font-family: 'Mitr', sans-serif;
        margin-left : 10px;   
        font-weight : medium;
        font-size : 24px;
        text-align :center;
        color : white;
`;
const Navex1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    <Nav1>
      <Navbar dark expand="md" >
        <NavbarBrand href="/"><img src = "/img/logoweb.png"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
              <NavItem>
              <NavLink href="/"><Text1>
                  <Nav2>Home</Nav2>
                  </Text1></NavLink>
              </NavItem>
            <NavItem>
            <NavLink href="/info/" ><Text1>
                <Nav2>Info</Nav2>
                </Text1></NavLink>
            </NavItem>   
            <NavItem>
              <NavLink href="/biology/" ><Text1>
                  <Nav2>Biology</Nav2></Text1></NavLink>
              </NavItem>
            
            
            <NavItem>
              <NavLink href="/type/"><Text1><Nav2>Type</Nav2></Text1></NavLink>
              </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
      </Nav1>
    </div>
  );
}

export default Navex1;