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
            readMoreProjectDescription: "",

            projectsJson : [
                {
                    'name': 'Loading...',
                    'image': 'https://i.imgur.com/3CAkQQ2.gif',
                    'tools': ['loading', 'loading', 'loading'],
                    'links': [
                        'loading', 'https://downloadmoreram.com/',
                        'loading', 'https://downloadmoreram.com/'
                    ],
                    'bullets': [
                        'loading...........',
                        'loading...........',
                        'loading...........'
                    ],
                    'read_more': 'Cupidatat voluptate incididunt ex commodo eu sunt qui amet exercitation quis laborum aute ut eiusmod. Sint consequat non irure id occaecat et reprehenderit in. Cupidatat do do minim fugiat. Est enim pariatur dolor nulla id velit dolor. Aliqua ad qui proident qui aliqua amet laborum veniam enim incididunt nostrud culpa eu eu. Ipsum non aute id laborum minim eiusmod quis.\nAliqua fugiat qui fugiat minim reprehenderit amet est ullamco enim nostrud nulla est esse magna. Ut aute minim eu sint est esse Lorem labore velit mollit exercitation in excepteur. Mollit consectetur nisi laboris aute occaecat velit quis in. Irure voluptate Lorem ut elit elit aliqua culpa. Dolor irure minim et sit dolore et.\nIpsum ea est ex dolor ipsum nulla est consectetur cupidatat commodo sit cillum eiusmod. Amet eu irure sit ipsum officia id incididunt adipisicing officia enim et. Aute qui aute cillum excepteur veniam. Amet tempor veniam pariatur officia labore nulla Lorem cupidatat. Quis laborum deserunt cillum fugiat.'
                }
            ]
        }
    }

    componentDidMount = () => {
        fetch('https://raw.githubusercontent.com/RYLiang18/personal_site_json/main/projects.json')
            .then(response => response.json())
            .then(data => {
                console.log("FUCKING REAAADD")
                console.log(data)
                this.setState({
                    projectsJson: data.Projects
                })
            })
    }

    clickedReadMore = (nameIn, toolsIn, linksIn, descriptionIn) => {
        this.setState({
            readMore:true,
            readMoreProjectName: nameIn,
            readMoreProjectTools: toolsIn,
            readMoreProjectLinks: linksIn,
            readMoreProjectDescription: descriptionIn
        })
    }
    
    render() {
        if (!this.state.readMore) {
            var ProjectCardComponents = this.state.projectsJson.map((projects) => (
                <ProjectCard
                    name = {projects.name}
                    img = {projects.image}
                    tools = {projects.tools}
                    bullets = {projects.bullets}
                    links = {projects.links}
                    description = {projects.read_more}
                    callback = {this.clickedReadMore}
                    key = {projects.name}
                />
            ))

            return (
                <Layout>
                    <div>
                        <h1>Projects</h1>
                        <p>Amet minim ea minim aute fugiat cupidatat. Fugiat eiusmod do eiusmod sit cillum adipisicing exercitation eiusmod veniam do veniam consequat labore consectetur. Mollit tempor Lorem in dolor. Laboris duis laborum velit nulla qui anim sint ullamco ea. Eu aliquip laborum aliquip cupidatat anim consectetur cillum. Exercitation ipsum voluptate adipisicing laborum nulla tempor ad cillum laborum ullamco.</p>
                    </div>
                    <br/>
                    {ProjectCardComponents}
                    {/* <ProjectCard
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
                    /> */}
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
