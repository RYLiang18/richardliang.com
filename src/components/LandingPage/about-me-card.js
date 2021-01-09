import React, { Component } from 'react'

import {
    Card
} from 'reactstrap'

class AboutMeCard extends Component {
    
    
    render() {
        return (
            <Card>
                {this.props.aboutMe}
            </Card>
        )
    }
}

export default AboutMeCard