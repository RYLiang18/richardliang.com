import { Link } from "gatsby"
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

import {
  MdMore,
  MdMail
} from 'react-icons/md'

import styles from './header.module.css'

import React, { Component } from 'react'

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      resumeLink: "",
      emailLink: "",
      links: []
    }
  }
  
  componentDidMount = () => {
    fetch('https://raw.githubusercontent.com/RYLiang18/personal_site_json/main/links.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          resumeLink: data.resume,
          links: data.links,
          emailLink: data.email
        })
      })
      .catch(err => {
        alert(err)
      })
  }



  render() {
    
    var moreOfMeLinks = this.state.links.map((link, index) => (
      <a 
        className="dropdown-item" 
        href = {link[1]}
        target = "_blank"
        key = {index}
        rel="noreferrer"
      >
        {link[0]}
      </a>
    ))

    return (
      <Navbar 
        dark
        expand="lg" 
        className={`shadow-lg mb-4 ${styles.navbarCustomColor}`}
      >
      <div className="container">
        <Link className={`navbar-brand ${styles.richardBrand} py-2`} to="/">
          <h2>Richard Liang</h2>
        </Link>
  
        <NavbarToggler onClick = {() => this.setState({isOpen: !this.state.isOpen})}/>
        <Collapse
          isOpen = {this.state.isOpen}
          navbar
        >
          <Nav className={`ml-auto ${styles.richardNavbar}`} navbar>
            {/* EXPERIENCE */}
            <NavItem>
              <Link className = "nav-link mx-2" to = "/experience">
                  experience
              </Link>
            </NavItem>
            
            {/* PROJECTS */}
            <NavItem>
              <Link className = "nav-link mx-2" to = "/projects">
                projects
              </Link>
            </NavItem>
  
            {/* RESUME */}
            <NavItem>
              <a className = "nav-link mx-2" target="_blank" href={this.state.resumeLink} rel="noreferrer">
                resume
              </a>
            </NavItem>

            {/* 📧 */}
            <NavItem>
              <a className = "nav-link mx-2" href={this.state.emailLink}>
                <MdMail/>
              </a>
            </NavItem>
  
            {/* 👨🏻‍💻 */}
            <Dropdown className="NavItem mx-2" nav isOpen={this.state.dropdownOpen} toggle={() => this.setState({dropdownOpen: !this.state.dropdownOpen})}>
              <DropdownToggle nav caret>
                <MdMore/>
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
