import React from 'react'

import {
    Card,
    CardHeader,
    CardBody
} from 'reactstrap'

import './about-me-card.css'

const AboutMeCard = ({aboutMe}) => {
    // var paragraphs = aboutMe.split("")
    var paragraphs = aboutMe.split("\\n").map((paragraph, index) => (
        <p 
            className="card-text about-me-paragraph"
            key={index}
        >
            {paragraph}
        </p>
    ))

    return (
        <Card className = "shadow about-me-card mb-3">
            <CardHeader className="about-me-card-header">
                <b>About Me</b>
            </CardHeader>
            <CardBody>
                {paragraphs}
            </CardBody>
        </Card>
    )
}


export default AboutMeCard