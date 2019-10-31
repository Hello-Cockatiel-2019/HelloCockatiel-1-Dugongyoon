import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="App">
       <Navbar background="transparent" light expand="md" >
        <NavbarBrand href="/" style={{margin:"20px" ,height:"25%"}}><img src="/img/navbarhead.png"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar style={{marginRight:"20px"}}>
            <NavItem style={{marginRight:"50px",marginLeft:"0px"}}>
              <NavLink href="#" style={{color:"white",fontSize:"24px",fontWeight:"bold"}}>HOME</NavLink>
            </NavItem>
            <NavItem style={{marginRight:"50px",marginLeft:"0px"}}>
              <NavLink href="#" style={{color:"white",fontSize:"24px",fontWeight:"bold"}}>INFO</NavLink>
            </NavItem>
            <NavItem style={{marginRight:"50px",marginLeft:"0px"}}>
              <NavLink href="#" style={{color:"white",fontSize:"24px",fontWeight:"bold"}}>BIOLOGY</NavLink>
            </NavItem>
            <NavItem style={{marginRight:"50px",marginLeft:"0px"}}>
              <NavLink href="#" style={{color:"white",fontSize:"24px",fontWeight:"bold"}}>TYPE</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default App;
