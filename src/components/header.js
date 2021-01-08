import { Link } from "gatsby"
import PropTypes from "prop-types"
import {
  Nav,
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink
} from 'reactstrap'

import React, { Component } from 'react'

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      links: {
        "resume": "https://downloadmoreram.com/",
        "linkedin" : "https://downloadmoreram.com/",
        "email": "mailto:richard.y.liang@gmail.com",
        "github": "https://downloadmoreram.com/"
      }
    }
  }
  
  componentDidMount = () => {
    fetch('https://raw.githubusercontent.com/RYLiang18/personal_site_json/main/links.json')
      .then(response => response.json())
      .then(data => {
        console.log(typeof(data))
        console.log(typeof(this.state.links))
        this.setState({links: data})
      })
      .catch(err => {
        alert(err)
      })
  }

  render() {
    console.log(this.state.links)
    return (
      <Navbar light color="light" expand="lg">
      <Link className = "navbar-brand" to="/">Richard Liang</Link>

      <NavbarToggler onClick = {() => this.setState({isOpen: !this.state.isOpen})}/>
      <Collapse
        isOpen = {this.state.isOpen}
        navbar
      >
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link className = "nav-link" to = "/experience">experience</Link>
          </NavItem>
          
          <NavItem>
            <Link className = "nav-link" to = "/projects">projects</Link>
          </NavItem>

          <NavItem>
            <Link className = "nav-link" to = {this.state.links.resume}>resume</Link>
          </NavItem>

          <NavItem>
            <Link className = "nav-link" to = {this.state.links.github}>🐱</Link>
          </NavItem>

          <NavItem>
            <Link className = "nav-link" to = {this.state.links.linkedin}>🔗</Link>
          </NavItem>

          <NavItem>
            <NavLink href = {this.state.links.email}>📧</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    )
  }
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
