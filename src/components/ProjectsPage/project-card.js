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
        <Card>
            <h3 className="card-header">{name}</h3>
            <Row noGutters={true}>
                <Col md="4">
                    <CardImg
                        className="img-fluid"
                        src = {img}
                        style = {{
                            height: '100%',
                            objectFit: 'cover'
                        }}
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

                        <div
                            style = {{
                                textAlign: 'right'
                            }}
                        >
                            {linksComponent}
                        </div>
                    </CardBody>
                </Col>
            </Row>
        </Card>
    )
}

export default ProjectCard