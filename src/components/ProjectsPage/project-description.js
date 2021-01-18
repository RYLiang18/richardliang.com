import React from 'react'

import {
    Badge
} from 'reactstrap'

import './project-description.css'

const ProjectDescription = ({name, tools, links, description, goBack}) => {
    var descriptionParagraphs = description.split("\\n").map((paragraph, index) => (
        <p 
            key={index}
            className = "description-paragraph"
        >
            {paragraph}
        </p>
    ))

    var toolBadges = tools.map((tool, index) => (
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
            {toolBadges}
            <hr/>
            {descriptionParagraphs}
            <div className = "links-buttons">
                {linksComponent}
            </div>
            <hr/>
        </div>
    )
}

export default ProjectDescription
