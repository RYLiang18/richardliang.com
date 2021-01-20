import React, { Component } from 'react'
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import PFPCard from "../components/LandingPage/pfp-card"
import AboutMeCard from "../components/LandingPage/about-me-card"

class IndexPage extends Component {
  constructor(props) {
    super(props)

    // default state values
    this.state = {
      links: {
        "email" : "mailto:ryliang@umd.edu",
        "resume" : "https://downloadmoreram.com/",
        "links":[]
      },
      homepageJson: {
        "pfp": "https://i.imgur.com/5r7v03y.png",
        "intro": "LOADING...",
        "about_me": "LOADING........"
      }
    }
  }

  // running fetch calls to get most recent state from github
  componentDidMount = () =>{
    Promise.all([
      fetch('https://raw.githack.com/RYLiang18/personal_site_json/main/links.json').then(response => response.json()),
      fetch('https://raw.githack.com/RYLiang18/personal_site_json/main/homepage.json').then(response => response.json())
    ]).then(data =>{
      console.log(data)
      this.setState({
        links: data[0],
        homepageJson: data[1]
      })
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <PFPCard 
          links={this.state.links} 
          homepageJson={this.state.homepageJson}
        />
        <AboutMeCard
          aboutMe={this.state.homepageJson.about_me}
        />
      </Layout>
    )
  }
}


export default IndexPage
