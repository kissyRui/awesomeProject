import React, {
    View,
    Text,
    StyleSheet,
    Component
} from 'react-native'

class Reddit extends Component {
    render() {
        return (
            <View style={styles.main}>
                <Text>Reddit</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column'
    }
})

export default Reddit
