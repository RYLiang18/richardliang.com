import React from 'react'

import {
    Card,
    Button,
    CardImg,
    CardBody,
    Row,
    Col,
    Badge,
} from 'reactstrap'

import styles from './project-card.module.css'

const ProjectCard = ({name, img, tools, bullets, links, description, callback}) => {
    var toolTags = tools.map((tool, index) => (
        <Badge pill className={`py-2 ${styles.toolTag}`} key={index} >{tool}</Badge>
    ))

    var bulletsComponent = bullets.map((bullet, index) => (
        <li key={index} >{bullet}</li>
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
        <Card className={`mb-4 shadow ${styles.projectCard}`}>
            <h3 className="card-header">{name}</h3>
            <Row noGutters>
                <Col md="4">
                    <CardImg
                        className={styles.projectCardImg}
                        src = {img}
                    />
                </Col>
                    
                <Col md="8" className="px-3">
                    <CardBody>
                        {toolTags}
                        
                        <h5>About this project:</h5>
                        <ul>
                            {bulletsComponent}
                        </ul>

                        <Button
                            // color="dark"
                            className= {`mb-5 ${styles.readMoreButton}`}
                            onClick = {() => callback(
                                name,
                                tools,
                                links,
                                description
                            )}
                        >
                            read more!
                        </Button>

                        <div className={styles.linkButtons}>
                            {linksComponent}
                        </div>
                    </CardBody>
                </Col>
            </Row>
        </Card>
    )
}

export default ProjectCard