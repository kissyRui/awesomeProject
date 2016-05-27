import React, {
    StyleSheet
} from 'react-native';

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
            marginTop: 0,
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

export default styles;
