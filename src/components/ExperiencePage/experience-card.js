import {
    Card,
    Button,
    CardImg,
    CardBody,
    Row,
    Col,
    Badge
} from 'reactstrap'

import styles from './experience-card.module.css'

import React from 'react'

const ExperienceCard = ({name, img, position, dates, techStack, links, bullets, readMore, callback}) => {
    var techStackTags = techStack.map((tool, index) => (
        <Badge pill className={`py-2 ${styles.toolTag}`} key={index}>{tool}</Badge>
    ))

    var bulletsComponent = bullets.map((bullet, index) => (
        <li key = {index}>{bullet}</li>
    ))

    var linksComponent = links.map((linkTup, index) => (
        <a
            className = {`btn btn-info ${styles.singleLinkButton}`}
            target = "_blank"
            href = {linkTup[1]}
            key = {index}
            rel="noreferrer"
        >
            {linkTup[0]}
        </a>
    ))
    
    return (
        <Card className={`${styles.experienceCard} mb-4 shadow`}>
            <h3 className = 'card-header'>{name}</h3>
            <Row noGutters = {true}>
                <Col md="4">
                    <div className={`${styles.experienceCardImgContainer}`}>
                        <CardImg
                            className={`img-fluid ${styles.experienceCardImg}`}
                            src = {img}
                        />
                    </div>
                </Col>
                <Col md="8">
                    <CardBody>
                        <h4>{position}</h4>
                        <h6>{dates[0]} - {dates[1]}</h6>
                        <p>
                            {techStackTags}
                        </p>
                        <b>My Work: </b>
                        <ul>{bulletsComponent}</ul>
                        <Button
                            className = {`mb-5 ${styles.readMoreButton}`}
                            onClick = {() => callback(
                                name,
                                position,
                                dates,
                                techStack,
                                readMore,
                                links
                            )}
                        >
                            read more!
                        </Button>

                        <div className = {styles.linkButtons}>
                            {linksComponent}
                        </div>
                    </CardBody>
                </Col>
            </Row>
        </Card>
    )
}

export default ExperienceCard