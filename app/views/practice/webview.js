import React, {
    Component,
    StyleSheet,
    View,
    Dimensions,
    PixelRatio,
    WebView,
} from 'react-native';

// import Dimensions from 'Dimensions';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

class Webview extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    injectedJavaScript="alert('欢迎使用React Native')"
                    bounces={false}
                    url='http://i.sdo.com'
                    style={{width: width, height: height}}>
                </WebView>
            </View>
        );
    }

};

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Webview;
