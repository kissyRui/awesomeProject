import React, {
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

import GeoInfo from './geoInfo'
import styles from './login.style'
import NetState from './netInfo'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            vcode: ''
        }
        this._handleClick = this._handleClick.bind(this)
    }

    _handleClick(e) {
        alert(e.target);
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
                            keyboardType="phone-pad"
                            onChangeText={(text) => this.setState({mobile: text})}
                            defaultValue="" />
                    </View>
                    <TouchableOpacity onPress={this._handleClick} style={styles.field_button}>
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
                            keyboardType="numeric"
                            onChangeText={(text) => this.setState({vcode: text})}
                            defaultValue="" />
                    </View>
                </View>
                <View style={styles.ui_tip}>
                    <Text style={styles.ui_tip_text}>验证成功后，无需绑定账号，该手机号已绑定的盛大通行证账号、手游账号自动与微信绑定。</Text>
                </View>
                <TouchableHighlight style={styles.ui_button} underlayColor="#36aaf1" activeOpacity={0.5}>
                    <Text style={styles.ui_button_text}>下一步</Text>
                </TouchableHighlight>
                <GeoInfo />
                <NetState />
            </View>
        );
    }

}

export default Login;
