import React, {
    Component
} from 'react';

import {
    Text
} from 'react-native';

class GeoInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            position: 'unknown'
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => this.setState({position}),
            (error) => console.error(error)
        );
    }

    render() {
        return (
            <Text>
                {JSON.stringify(this.state.position)}
            </Text>
        )
    }

}

export default GeoInfo;
