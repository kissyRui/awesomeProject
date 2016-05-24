'use strict';

import React, {
    StyleSheet,
    Component,
    Text,
    Image,
    View,
    TextInput,
    Alert,
    Modal,
    PixelRatio,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mobile: '',
            vcode: ''
        }
    }

    render() {
        return (
            <View style={styles.main}>
                <TouchableOpacity style={styles.field_touchable}>
                    <View style={styles.field_wrap}>
                        <View style={styles.field_label}>
                            <Text style={styles.field_label_text}>国家地区</Text>
                        </View>
                        <View style={styles.field_arrow}></View>
                    </View>
                </TouchableOpacity>
                <View style={styles.field_wrap}>
                    <View style={styles.field_label}>
                        <Text style={styles.field_label_text}>手机号</Text>
                    </View>
                    <View style={styles.field_input}>
                        <TextInput
                            underlineColorAndroid="rgba(0,0,0,0)"
                            style={styles.field_input_item}
                            placeholder="请输入手机号"
                            value={this.state.mobile}
                            defaultValue="" />
                    </View>
                    <TouchableOpacity style={styles.field_button}>
                        <Text style={styles.field_button_text}>获取验证码</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.field_wrap}>
                    <View style={styles.field_label}>
                        <Text style={styles.field_label_text}>验证码</Text>
                    </View>
                    <View style={styles.field_input}>
                        <TextInput
                            underlineColorAndroid="rgba(0,0,0,0)"
                            style={styles.field_input_item}
                            placeholder="请输入验证码"
                            value={this.state.vcode}
                            defaultValue="" />
                    </View>
                </View>
                <View style={styles.ui_tip}>
                    <Text style={styles.ui_tip_text}>验证成功后，无需绑定账号，该手机号已绑定的盛大通行证账号、手游账号自动与微信绑定。</Text>
                </View>
                <TouchableHighlight style={styles.ui_button} underlayColor="#36aaf1" activeOpacity={0.5}>
                    <Text style={styles.ui_button_text}>下一步</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        main: {
            flexDirection: 'column'
        },
        field_touchable: {
            flex: 1
        },
        // 表单字段
        field_wrap: {
            position: 'relative',
            flex: 1,
            height: 53,
            borderBottomWidth: 1,
            borderBottomColor: '#d9d9d9',
            backgroundColor:'#fff',
            flexDirection: 'row'
        },
        // left
        field_label: {
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
        field_input_item: {
            flex: 1,
            fontSize: 16,
            marginTop: 10,
            height: 42
        },
        field_button: {
            height: 52,
            paddingRight: 15,
            justifyContent: 'center'
        },
        field_button_text: {
            color: '#1e9deb',
            fontSize: 16
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
        },
        ui_tip: {
            margin: 15
        },
        ui_tip_text: {
            color: '#8b8b8b',
            fontSize: 13,
            lineHeight: 26
        },
        ui_button: {
            marginTop: 20,
            flex: 1,
            height: 44,
            marginLeft: 15,
            marginRight: 15,
            flexDirection: 'row',
            backgroundColor: '#1e9deb',
            alignSelf: 'stretch',
            borderRadius: 4,
            justifyContent: 'center'
        },
        ui_button_text: {
            color: '#FFF',
            alignSelf: 'center',
            fontSize: 18
        }
    }
);

module.exports = Login;
