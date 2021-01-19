import React from 'react'

import {
    Badge
} from 'reactstrap'

import styles from './experience-description.module.css'

const ExperienceDescription = ({name, position, dates, techStack, links, description, goBack}) => {
    var descriptionParagraphs = description.split("\\n").map((paragraph, index) => (
        <p
            className = {styles.descriptionParagraph} 
            key={index}
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

            <div>{techStackBadges}</div>

            <hr/>
            {descriptionParagraphs}

            <div className={styles.linkButtons}>
                {linksComponent}
            </div>
            <hr/>
        </div>
    )
}

export default ExperienceDescription
