import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavDropdown } from 'react-bootstrap'


function Header() {
    return(
        <header className="header">
           
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Team Stephens-Powe</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Link to ="/" id="link">Home</Link>
    </Nav>
    <Nav>
      <NavDropdown title="Movies/TV Shows" id="collasible-nav-dropdown">
        <NavDropdown.Item><Link to="/Movies" id="link">Movies</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/TvShows" id="link">Tv Shows</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </header>

        
    )
}

export default Header