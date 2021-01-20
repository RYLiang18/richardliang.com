import React from 'react'

import {
    Card,
    CardHeader,
    CardBody
} from 'reactstrap'

import styles from './about-me-card.module.css'

const AboutMeCard = ({aboutMe}) => {
    // var paragraphs = aboutMe.split("")
    var paragraphs = aboutMe.split("\\n").map((paragraph, index) => (
        <p 
            className={`card-text ${styles.aboutMeParagraph}`}
            key={index}
        >
            {paragraph}
        </p>
    ))

    return (
        <Card className = {`shadow ${styles.aboutMeCard} mb-3`}>
            <CardHeader>
                <h3><b>About Me</b></h3>
            </CardHeader>
            <CardBody>
                {paragraphs}
            </CardBody>
        </Card>
    )
}


export default AboutMeCard