import {
    Card,
    Button
} from 'reactstrap'

import React from 'react'

const PFPCard = ({links}) => (
    <Card>
        <a href={links['resume']}>resume</a>
        <br/>
        <a href={links.github}>github</a>
        <br/>
        <a href={links.linkedin}>linkedin</a>
    </Card>
)

export default PFPCard