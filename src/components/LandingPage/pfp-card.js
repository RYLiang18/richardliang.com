import {
    Card,
    Row,
    Col,
    CardBody,
    CardText,
    CardImg
} from 'reactstrap'

import React from 'react'

/*
PROPS:
- links
- homepageJson
*/
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
        <Card>
            <Row noGutters style={{textAlign: 'center'}}>
                <Col md="8" style={{margin: 'auto'}}>
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
                <Col md="4">
                    <CardImg
                        className="rounded-circle"
                        src = {homepageJson.pfp}
                    />
                </Col>
            </Row>
        </Card>
    )
}

export default PFPCard