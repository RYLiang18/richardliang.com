import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink
} from 'reactstrap'

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return(
    <Navbar light color="light" expand="lg">
      <NavbarBrand><Link to="/">Richard Liang</Link></NavbarBrand>

      <NavbarToggler onClick = {toggle}/>
      <Collapse
        isOpen = {isOpen}
        navbar
      >
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink>
              <Link to = "/experience">experience</Link>
            </NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink>
              <Link to = "/projects">projects</Link>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink>
              <Link to = "/">resume</Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>

    /* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% DEFAULT %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
    // <header
    //   style={{
    //     background: `rebeccapurple`,
    //     marginBottom: `1.45rem`,
    //   }}
    // >
    //   <div
    //     style={{
    //       margin: `0 auto`,
    //       maxWidth: 960,
    //       padding: `1.45rem 1.0875rem`,
    //     }}
    //   >
    //     <h1 style={{ margin: 0 }}>
    //       <Link
    //         to="/"
    //         style={{
    //           color: `white`,
    //           textDecoration: `none`,
    //         }}
    //       >
    //         {siteTitle}
    //       </Link>
    //     </h1>
    //   </div>
    // </header>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
