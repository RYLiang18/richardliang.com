import React from 'react'

import {
    Badge,
    Button
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
        <Badge pill key = {index} className={`py-2 mr-1 mb-2 ${styles.toolTag}`}>
            <b>{tool}</b>
        </Badge>
    ))

    var linksComponent = links.map((linkTup, index) => (
        <a
            className = {`btn btn-info ${styles.singleLinkButton}`}
            target = "_blank"
            rel="noreferrer"
            href = {linkTup[1]}
            key = {index}
        >
            {linkTup[0]}
        </a>
    ))

    return (
        <div>
            <Button
                color="link"
                onClick = {() => goBack()}
            >
                <h3>🔙 GO BACK!</h3>
            </Button>

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
