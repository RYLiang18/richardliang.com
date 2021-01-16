import React, { Component } from 'react'

// COMPONENT IMPORTS
import Layout from "../components/layout"
import ExperienceCard from '../components/ExperiencePage/experience-card'

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
        return (
            <Layout>
                <div>
                    <h1>Experience</h1>
                    <p>Amet minim ea minim aute fugiat cupidatat. Fugiat eiusmod do eiusmod sit cillum adipisicing exercitation eiusmod veniam do veniam consequat labore consectetur. Mollit tempor Lorem in dolor. Laboris duis laborum velit nulla qui anim sint ullamco ea. Eu aliquip laborum aliquip cupidatat anim consectetur cillum. Exercitation ipsum voluptate adipisicing laborum nulla tempor ad cillum laborum ullamco.</p>
                </div>
                <br/>
                <ExperienceCard
                    name = "bruh"
                    img = "https://i.imgur.com/3CAkQQ2.gif"
                    position = "bruh engineer"
                    dates = {['Apr. 2020', 'Apr. 2020']}
                    techStack = {["bruh", "bruh", "bruh", "bruh", "bruh"]}
                    links = {[
                        ["website", "https://downloadmoreram.com/"],
                        ["pee", "https://github.com/"]
                    ]}
                    bullets = {[
                        "bruh bruh bruh",
                        "bruh bruh bruh",
                        "bruh bruh bruh"
                    ]}
                    readMore = "Ex ullamco aute enim tempor dolore. Duis dolore ut velit est laborum amet cillum culpa ex laborum. Id sit anim ex deserunt sunt."
                    callback = {this.clickedReadMore}
                />
            </Layout>
        )
    }
}

export default ExperiencePage