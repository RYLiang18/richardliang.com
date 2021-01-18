import {
    Card,
    Button,
    CardImg,
    CardBody,
    Row,
    Col,
    Badge
} from 'reactstrap'

import './experience-card.css'

import React from 'react'

const ExperienceCard = ({name, img, position, dates, techStack, links, bullets, readMore, callback}) => {
    var techStackTags = techStack.map((tool, index) => (
        <Badge key = {index}>{tool}</Badge>
    ))

    var bulletsComponent = bullets.map((bullet, index) => (
        <li key = {index}>{bullet}</li>
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
        <Card>
            <h3 className = 'card-header'>{name}</h3>
            <Row noGutters = {true}>
                <Col md="4">
                    <CardImg
                        className="img-fluid experience-card-img"
                        src = {img}
                    />
                </Col>
                <Col md="8">
                    <CardBody>
                        <h4>{position}</h4>
                        <h6>{dates[0]} - {dates[1]}</h6>
                        <p>
                            {techStackTags}
                        </p>
                        <p>
                            My work:
                            <ul>{bulletsComponent}</ul>
                        </p>
                        <Button
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

                        <div
                            className = "link-buttons"
                        >
                            {linksComponent}
                        </div>
                    </CardBody>
                </Col>
            </Row>
        </Card>
    )
}

export default ExperienceCard