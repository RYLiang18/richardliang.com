import React from 'react'

import {
    Badge
} from 'reactstrap'

const ExperienceDescription = ({name, position, dates, techStack, links, description, goBack}) => {
    var descriptionParagraphs = description.split("\\n").map((paragraph, index) => (
        <p 
            key={index}
            style={{
                textIndent: '2em'
            }}
        >
            {paragraph}
        </p>
    ))

    var techStackBadges = techStack.map((tool, index) => (
        <Badge key = {index}>
            <b>{tool}</b>
        </Badge>
    ))

    var linksComponent = links.map((linkTup, index) => (
        <a
            className = "btn btn-info"
            target = "_blank"
            href = {linkTup[1]}
            key = {index}
        >
            {linkTup[0]}
        </a>
    ))

    return (
        <div>
            <a
                onClick = {() => goBack()}
                href = "#"
            >
                🔙 GO BACK!
            </a>

            <h1>{name}</h1>

            <h3>{position}, {dates[0]} - {dates[1]}</h3>

            <div>
                {/* <h4 style={{display: 'inline'}}>Tech Stack: </h4> */}
                <div style={{display: 'inline'}}>{techStackBadges}</div>
            </div>

            <hr/>
            {descriptionParagraphs}

            <div
                style = {{
                    textAlign: 'right'
                }}
            >
                {linksComponent}
            </div>
            <hr/>
        </div>
    )
}

export default ExperienceDescription
