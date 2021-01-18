import {
    Card,
    Row,
    Col,
    CardBody,
    CardText,
    CardImg
} from 'reactstrap'

import React from 'react'

import './pfp-card.css'

const PFPCard = ({links, homepageJson}) => {
    var moreOfMeLinks = links.links.map((link) => (
        /*
            link[0] = link name
            link[1] = link url
        */
        <a
            className = "btn btn-sm btn-outline-dark"
            href = {link[1]}
            key = {link[0]}
        >
            {link[0]}
        </a>
    ))

    return (
        <Card className="pfp-card shadow mb-3">
            <Row noGutters className='pfp-card-row'>
                <Col md="7" className='pfp-card-left-col'>
                    <CardBody>
                        <CardText>
                            Hey there! I'm
                        </CardText>
                        <h1 className="mb-4">
                            <b>RICHARD </b>
                            <b>LIANG</b>
                        </h1>
                        <CardText>
                            {homepageJson.intro}
                        </CardText>
                        <br/>
                        <a
                            className = "btn btn-sm btn-outline-dark"
                            href = {links.resume}
                        >
                            resume 📃
                        </a>
                        <br/>
                        {moreOfMeLinks}
                    </CardBody>
                </Col>
                <Col md="5">
                    <CardImg
                        className="rounded-circle pfp-img"
                        src = {homepageJson.pfp}
                    />
                </Col>
            </Row>
        </Card>
    )
}

export default PFPCard