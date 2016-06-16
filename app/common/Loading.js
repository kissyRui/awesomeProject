/**
 * Created by kissy小鬼 on 16/6/16-下午5:05.
 */
import React, {
    StyleSheet,
    View,
    Text,
    Component,
    ActivityIndicatorIOS,
} from 'react-native';

import Constants from '../constants/Constants';

export default class Loading extends Component {
    render() {
        return (
            <View style={styles.loading}>
                <ActivityIndicatorIOS color="white"/>
                <Text style={styles.loadingTitle}>加载中……</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loading: {
        backgroundColor: 'gray',
        height: 80,
        width: 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: (Constants.window.height-80)/2,
        left: (Constants.window.width-100)/2,
    },

    loadingTitle: {
        marginTop: 10,
        fontSize: 14,
        color: 'white'
    }
})