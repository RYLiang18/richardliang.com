import { Link } from "gatsby"
import PropTypes from "prop-types"
import {
  Nav,
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap'

import React, { Component } from 'react'

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      resumeLink: "",
      links: []
    }
  }
  
  componentDidMount = () => {
    fetch('https://raw.githubusercontent.com/RYLiang18/personal_site_json/main/links.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          resumeLink: data.resume,
          links: data.links
        })
      })
      .catch(err => {
        alert(err)
      })
  }



  render() {
    
    var moreOfMeLinks = this.state.links.map((link) => (
      /*
        link[0] = link name
        link[1] = link url
      */
      <a 
        className="dropdown-item" 
        href = {link[1]}
        key = {link[0]}
      >
        {link[0]}
      </a>
    ))

    return (
      <Navbar light color="light" expand="lg">
      <div className="container">
        <Link className = "navbar-brand" to="/">Richard Liang</Link>
  
        <NavbarToggler onClick = {() => this.setState({isOpen: !this.state.isOpen})}/>
        <Collapse
          isOpen = {this.state.isOpen}
          navbar
        >
          <Nav className="ml-auto" navbar>
            {/* EXPERIENCE */}
            <NavItem>
              <Link className = "nav-link" to = "/experience">experience</Link>
            </NavItem>
            
            {/* PROJECTS */}
            <NavItem>
              <Link className = "nav-link" to = "/projects">projects</Link>
            </NavItem>
  
            {/* RESUME */}
            <NavItem>
              <a className = "nav-link" href={this.state.resumeLink}>resume</a>
            </NavItem>
  
            {/* 👨🏻‍💻 */}
            <Dropdown className="NavItem" nav isOpen={this.state.dropdownOpen} toggle={() => this.setState({dropdownOpen: !this.state.dropdownOpen})}>
              <DropdownToggle nav caret>
                👨🏻‍💻
              </DropdownToggle>
              <DropdownMenu>
                {moreOfMeLinks}
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
    )
  }
}


export default Header
