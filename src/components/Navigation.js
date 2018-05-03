import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Navigation = () => {
  return (
    <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">ES Stickers</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={1} title="Stickers" id="basic-nav-dropdown">
              <MenuItem eventKey={1.1}>Music</MenuItem>
              <MenuItem eventKey={1.2}>Animals</MenuItem>
              <MenuItem eventKey={1.3}>Logos</MenuItem>
              <MenuItem eventKey={1.4}>Misc</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} href="#">
              Artwork
            </NavItem>
            <NavItem eventKey={3} href="#">
              Custom
            </NavItem>
            <NavItem eventKey={4} href="#">
              About
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation;