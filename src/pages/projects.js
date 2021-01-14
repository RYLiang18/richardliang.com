import React, { Component } from 'react'

// COMPONENT IMPORTS
import Layout from "../components/layout"
import ProjectCard from '../components/ProjectsPage/project-card'

import{
    Button
} from 'reactstrap'

class ProjectsPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            readMore: false,
            readMoreProjectName: "",
            readMoreProjectTools: [],
            readMoreProjectLinks: [],
            readMoreProjectDescription: ""
        }
    }

    clickedReadMore = (nameIn, toolsIn, linksIn, descriptionIn) =>{
        this.setState({
            readMore:true,
            readMoreProjectName: nameIn,
            readMoreProjectTools: toolsIn,
            readMoreProjectLinks: linksIn,
            readMoreProjectDescription: descriptionIn
        })
    }
    
    render() {
        if (!this.state.readMore){
            return (
                <Layout>
                    <div>
                        <h1>Projects</h1>
                        <p>Amet minim ea minim aute fugiat cupidatat. Fugiat eiusmod do eiusmod sit cillum adipisicing exercitation eiusmod veniam do veniam consequat labore consectetur. Mollit tempor Lorem in dolor. Laboris duis laborum velit nulla qui anim sint ullamco ea. Eu aliquip laborum aliquip cupidatat anim consectetur cillum. Exercitation ipsum voluptate adipisicing laborum nulla tempor ad cillum laborum ullamco.</p>
                    </div>
                    <br/>
                    <ProjectCard
                        name="bruh"
                        img = "https://i.imgur.com/plwmM4E.jpg"
                        tools = {['bruh', 'bruh', 'bruh', 'bruh']}
                        bullets = {['blah blah blah blah', 'blah blah blah blah', 'blah blah blah blah']}
                        links = {[
                            ['github', 'https://github.com/'],
                            ['facebook', 'https://www.facebook.com/'],
                            ['twitter', 'https://twitter.com/']
                        ]}
                        description = "Aute et proident irure incididunt.\nUllamco culpa fugiat ipsum amet.\nCupidatat ipsum ipsum minim excepteur sit elit aute in sit."
                        callback = {this.clickedReadMore}
                    />
                </Layout>
            )
        } else {
            var descriptionParagraphs = this.state.readMoreProjectDescription.split("\\n").map((paragraph, index) => (
                <p 
                    key={index}
                    style={{
                        textIndent: '2em'
                    }}
                >
                    {paragraph}
                </p>
            ))

            return (
                <Layout>
                    <a
                        onClick = {() => this.setState({
                            readMore: false
                        })}
                        href = "#"
                    >
                        🔙 GO BACK!
                    </a>
                    <div>
                        <h1>
                            {this.state.readMoreProjectName}
                        </h1>
                        {descriptionParagraphs}
                    </div>
                </Layout>
            )
        }
    }
}

export default ProjectsPage
