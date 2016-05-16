'use strict';

import React, {
    StyleSheet,
    Component,
    Text,
    Image,
    View,
    TextInput,
    Alert,
    PixelRatio,
    TouchableOpacity
} from 'react-native';

class Login extends Component {
    render() {
        return (
            <View style={styles.main}>
                <TouchableOpacity style={styles.field_touchable}>
                    <View style={styles.field_wrap}>
                        <View style={styles.field_label}>
                            <Text style={styles.field_label_text}>国家地区</Text>
                        </View>
                        <View style={styles.field_input}></View>
                        <View style={styles.field_arrow}></View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        main: {
            flex: 1,
            flexDirection: 'row'
        },
        field_touchable: {
            flex: 1,
            height: 53,
            backgroundColor: '#EFEFEF'
        },
        field_wrap: {
            position: 'relative',
            flex: 1,
            borderBottomWidth: 1,
            borderBottomColor: '#d9d9d9',
            flexDirection: 'row'
        },
        // left
        field_label: {
            flex: 1,
            width: 80,
            justifyContent: 'center',
            marginLeft: 15
        },
        field_label_text: {
            color: '#242424',
            fontSize: 16
        },
        // center
        field_input: {
            flex: 1
        },
        // right
        field_arrow: {
            position: 'absolute',
            top: 0,
            right: 15,
            width: 10,
            height: 10,
            marginTop: 20,
            borderColor: '#c7c7cc',
            borderWidth: 2,
            borderLeftWidth: 0,
            borderTopWidth: 0,
            transform: [{rotate:"-45deg"}]
        },
        border_line: {
            height: 1,
            borderBottomColor: '#d9d9d9',
            borderBottomWidth: 1
        }
    }
);

module.exports = Login;
