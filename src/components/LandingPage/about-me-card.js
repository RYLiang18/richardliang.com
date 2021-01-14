import React from 'react'

import {
    Card,
    CardHeader,
    CardBody
} from 'reactstrap'


const AboutMeCard = ({aboutMe}) => {
    // var paragraphs = aboutMe.split("")
    var paragraphs = aboutMe.split("\n").map((paragraph, index) => (
        <p 
            className="card-text"
            key={index}
            style={{
                textIndent: '2em'
            }}
        >
            {paragraph}
        </p>
    ))

    return (
        <Card>
            <CardHeader>
                <b>About Me</b>
            </CardHeader>
            <CardBody>
                {paragraphs}
            </CardBody>
        </Card>
    )
}


export default AboutMeCard