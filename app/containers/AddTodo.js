import React, {
    Component,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'

import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        // this._handleClick = this._handleClick.bind(this)
    }

    _handleClick = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        const { text } = this.state
        if(!text.trim()) {
            this.textInput.focus()
            return
        }
        else {
            this.setState({
                text: ''
            })
            dispatch(addTodo(text))
        }
    };

    render() {
        return (
            <View style={styles.field_wrap}>
                <View style={styles.field_input}>
                    <TextInput
                        autoFocus={true}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        style={styles.field_input_item}
                        placeholder="请输入待办事项"
                        ref={(node) => this.textInput = node } // 一种获取的方式
                        value={this.state.text}
                        onChangeText={(text) => this.setState({text})}
                        defaultValue="" />
                </View>
                <TouchableOpacity onPress={this._handleClick} style={styles.field_button}>
                    <Text style={styles.field_button_text}>添加Todo</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    field_wrap: {
        position: 'relative',
        flex: 1,
        height: 53,
        borderBottomWidth: 1,
        borderBottomColor: '#d9d9d9',
        backgroundColor:'#fff',
        flexDirection: 'row'
    },
    field_input: {
        flex: 1
    },
    field_input_item: {
        flex: 1,
        fontSize: 16,
        marginTop: 0,
        paddingLeft: 15,
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
    }
})

AddTodo = connect()(AddTodo)

export default AddTodo
