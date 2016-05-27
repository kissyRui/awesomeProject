import React, {
    Component,
    View,
    CameraRoll
} from 'react-native';

const fetchParams = {
    first: 4,
    // groupTypes: 'Album',
    assetType: 'Photos'
};

const imgURL = 'http://vczero.github.io/lvtu/img/';

class Camera extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: null
        };
    }

    componentDidMount() {
        let self = this;
        CameraRoll.getPhotos(
            fetchParams,
            (data) => {
                console.log(data);
            },
            () => {
                alert('获取图片失败');
            }
        )
    }

    render() {
        return (
            <View></View>
        );
    }

}

export default Camera;
