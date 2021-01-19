import React, { Component } from 'react'

// COMPONENT IMPORTS
import Layout from "../components/layout"
import ExperienceCard from '../components/ExperiencePage/experience-card'
import ExperienceDescription from '../components/ExperiencePage/experience-description'

class ExperiencePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            readMore: false,
            readMoreExpName: "",
            readMoreExpPosName: "",
            readMoreExpDates:[],
            readMoreExpTechStack: [],
            readMoreExpLinks: [],
            readMoreExpDescription:"",

            experiencesJson: [
                {
                    "name": 'Loading...',
                    "image": 'https://i.imgur.com/3CAkQQ2.gif',
                    "position": 'Loading',
                    'dates': ['Apr. 2020', 'Apr. 2020'],
                    'tech_stack': ['loading', 'loading', 'loading'],
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
        fetch('https://raw.githubusercontent.com/RYLiang18/personal_site_json/main/experience.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    experiencesJson: data.experiences
                })
            })
    }

    clickedReadMore = (nameIn, positionIn, datesIn, techStackIn, descriptionIn, linksIn) => {
        this.setState({
            readMore: true,
            readMoreExpName: nameIn,
            readMoreExpPosName: positionIn,
            readMoreExpDates: datesIn,
            readMoreExpTechStack: techStackIn,
            readMoreExpLinks: linksIn,
            readMoreExpDescription: descriptionIn
        })
    }

    render() {
        var retComponent = null

        if (this.state.readMore === false){
            var ExperienceCardComponents = this.state.experiencesJson.map((experience, index) => (
                <ExperienceCard
                    name = {experience.name}
                    img = {experience.image}
                    position = {experience.position}
                    dates = {experience.dates}
                    techStack = {experience.tech_stack}
                    links = {experience.links}
                    bullets = {experience.bullets}
                    readMore = {experience.read_more}
                    callback = {this.clickedReadMore}

                    key = {index}
                />
            ))
            
            retComponent = (
                <div>
                    <h1>Experiences 💼</h1>
                    <br/>
                    {ExperienceCardComponents}
                </div>
            )
        } else {
            retComponent = (
                <ExperienceDescription
                    name = {this.state.readMoreExpName}
                    position = {this.state.readMoreExpPosName}
                    dates = {this.state.readMoreExpDates}
                    techStack = {this.state.readMoreExpTechStack}
                    links = {this.state.readMoreExpLinks}
                    description = {this.state.readMoreExpDescription}
                    goBack = {() => this.setState({
                        readMore: false
                    })}
                />
            )
        }
        
        return (
            <Layout>
                {retComponent}
            </Layout>
        )
    }
}

export default ExperiencePage