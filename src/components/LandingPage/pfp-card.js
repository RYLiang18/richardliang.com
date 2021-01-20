import {
    Card,
    Row,
    Col,
    CardBody,
    CardText,
    CardImg
} from 'reactstrap'

import React from 'react'

import styles from './pfp-card.module.css'

const PFPCard = ({links, homepageJson}) => {
    var moreOfMeLinks = links.links.map((link, index) => (
        <a
            className = {`btn btn-info mx-1 my-2 ${styles.buttonThingy}`}
            href = {link[1]}
            target="_blank"
            key = {index}
        >
            {link[0]}
        </a>
    ))

    return (
        <Card className={`${styles.pfpCard} shadow mb-3`}>
            <Row noGutters className={styles.pfpCardRow}>
                <Col md="7" className={styles.pfpCardLeftCol}>
                    <CardBody>
                        <CardText>
                            Hello and welcome! I'm
                        </CardText>
                        <h1 className="mb-4">
                            <b>RICHARD </b>
                            <b>LIANG</b>
                        </h1>
                        <CardText className="mx-5">
                            {homepageJson.intro}
                        </CardText>
                        <br/>
                        <a
                            className = {`btn btn-info mx-1 my-2 ${styles.buttonThingy}`}
                            href = {links.resume}
                        >
                            resume 📃
                        </a>
                        {moreOfMeLinks}
                    </CardBody>
                </Col>
                <Col md="5">
                    <CardImg
                        className="rounded-circle p-5"
                        src = {homepageJson.pfp}
                    />
                </Col>
            </Row>
        </Card>
    )
}

export default PFPCard