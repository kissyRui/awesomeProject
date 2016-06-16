/**
 * Created by kissy小鬼 on 16/6/14-下午4:07.
 */
import React, {
    Component,
    View,
    StatusBar,
    StyleSheet
} from 'react-native'

import Constants from '../constants/Constants'

class CustomStatusBarIOS extends Component {

    render() {
        return (
            <View>
                <StatusBar {...this.props}/>
                <View style={styles.statusBar}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    statusBar: {
        flex: 1,
        height: 20,
        backgroundColor: Constants.colors.themeColor,
    }

})

export default CustomStatusBarIOS