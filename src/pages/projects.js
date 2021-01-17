import React, { Component } from 'react'

// COMPONENT IMPORTS
import Layout from "../components/layout"
import ProjectCard from '../components/ProjectsPage/project-card'
import ProjectDescription from '../components/ProjectsPage/project-description'

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
        var retComponent = null

        if (this.state.readMore == false) {
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

            retComponent = (
                <div>
                    <div>
                        <h1>Projects</h1>
                        <p>Amet minim ea minim aute fugiat cupidatat. Fugiat eiusmod do eiusmod sit cillum adipisicing exercitation eiusmod veniam do veniam consequat labore consectetur. Mollit tempor Lorem in dolor. Laboris duis laborum velit nulla qui anim sint ullamco ea. Eu aliquip laborum aliquip cupidatat anim consectetur cillum. Exercitation ipsum voluptate adipisicing laborum nulla tempor ad cillum laborum ullamco.</p>
                    </div>
                    <br/>
                    {ProjectCardComponents}
                </div>
            )
        } else {            
            retComponent = (
                <ProjectDescription
                    name = {this.state.readMoreProjectName}
                    tools = {this.state.readMoreProjectTools}
                    links = {this.state.readMoreProjectLinks}
                    description = {this.state.readMoreProjectDescription}
                    goBack = {() => this.setState({
                        readMore: false
                    })}
                />
            )
        }

        return (
            <Layout>
                {retComponent}
                <a target="_blank" href="https://github.com/RYLiang18">
                    <img 
                        src = "https://ghchart.rshah.org/003061/ryliang18"
                        alt = "RYLiang18's Blue Github Calendar"
                        style = {{
                            width: '100%',
                            // display: 'block',
                            // marginLeft: 'auto',
                            // marginRight: 'auto'
                        }}
                    />
                </a>
                <p 
                    style= {{
                        textAlign:'center'
                    }}
                >
                    @RYLiang18's contributions on
                    <img
                        src = "https://img.icons8.com/material-sharp/24/000000/github.png"
                    />
                </p>

            </Layout>
        )
    }
}

export default ProjectsPage
