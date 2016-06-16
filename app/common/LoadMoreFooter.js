/**
 * Created by kissy小鬼 on 16/6/16-下午5:34.
 */
import React, {
    ActivityIndicatorIOS,
    View,
    Component,
    Text,
    StyleSheet,
} from 'react-native'

export default class LoadMoreFooter extends Component {
    render() {
        return (
            <View style={styles.footer}>
                <ActivityIndicatorIOS />
                <Text style={styles.footerTitle}>正在加载更多……</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },

    footerTitle: {
        marginLeft: 10,
        fontSize: 15,
        color: 'gray'
    }
})