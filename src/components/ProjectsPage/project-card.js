import { right } from '@popperjs/core'
import React from 'react'

import {
    Card,
    Button,
    CardImg,
    CardBody,
    Row,
    Col,
    Badge,
    CardFooter
} from 'reactstrap'

import './project-card.css'

const ProjectCard = ({name, img, tools, bullets, links, description, callback}) => {
    var toolTags = tools.map((tool, index) => (
        <Badge key={index} >{tool}</Badge>
    ))

    var bulletsComponent = bullets.map((bullet, index) => (
        <li key={index} >{bullet}</li>
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
        <Card className="mb-3 shadow project-card">
            <h3 className="card-header">{name}</h3>
            <Row noGutters>
                <Col md="4">
                    <CardImg
                        className="project-card-img"
                        src = {img}
                    />
                </Col>
                    
                <Col md="8">
                    <CardBody>
                        {toolTags}
                        
                        <p>
                            <h5>About this project:</h5>
                            <ul>
                                {bulletsComponent}
                            </ul>
                        </p>

                        <Button
                            onClick = {() => callback(
                                name,
                                tools,
                                links,
                                description
                            )}
                        >
                            read more!
                        </Button>

                        <div className="links-buttons">
                            {linksComponent}
                        </div>
                    </CardBody>
                </Col>
            </Row>
        </Card>
    )
}

export default ProjectCard