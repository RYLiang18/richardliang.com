/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from 'react'
import PropTypes from "prop-types"

import Header from "./header"

import styles from "./layout.module.css"

import {
  Container,
  Row,
  Col
} from 'reactstrap'

const Layout = ({ children }) => {

  return (
    <div className={styles.customLayoutColor}>
      <Header/>
      <Container fluid = {true}>
        <Row className="pt-md-4">
          <Col lg="2"/>
          <Col lg="8">
            <main>
              {children}
            </main>
            <footer className={styles.layoutFooter}>
              © {new Date().getFullYear()},
              노량진 수산시장 🐠
            </footer>
          </Col>
          <Col lg="2"/>
        </Row>
      </Container>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
