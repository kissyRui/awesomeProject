/**
 * Created by kissy小鬼 on 16/6/16-上午10:04.
 */
import React, {
    Component,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'

import Constants from '../constants/Constants'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

class SearchHeader extends Component {

    render() {

        let { scanAction, searchAction } = this.props

        return (
            <View style={styles.header}>
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={styles.searchInput}
                    onPress={searchAction}>
                    <Image
                        style={styles.searchIcon}
                        source={require('../images/search.png')}/>
                    <Text style={styles.searchPlaceholder}>请输入食物名称</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.scanIcon}
                    activeOpacity={0.75}
                    onPress={scanAction}>
                    <FontAwesome name="qrcode" size={20} color={Constants.colors.themeColor}></FontAwesome>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#CCC',
        borderBottomWidth: 0.5
    },
    searchInput: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        height: 32,
        //width: Constants.window.width - 30 - 10 * 3,
        margin: 6,
        padding: 10,
        backgroundColor: 'rgb(245, 246, 247)',
        borderRadius: 2
    },
    scanIcon: {
        paddingLeft: 4,
        paddingRight: 10
    },
    searchIcon: {
        width: 20,
        height: 20
    },
    searchPlaceholder: {
        marginLeft: 10,
        textAlign: 'center',
        fontSize: 15,
        color: 'gray'
    }
})

export default SearchHeader