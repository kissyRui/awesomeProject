/**
 * Created by kissy小鬼 on 16/6/8下午4:49.
 */
import React, {
    Component,
    StyleSheet,
    View,
    Text,
    TextInput,
    PropTypes,
    TouchableOpacity
} from 'react-native'

class AddTodo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    render() {

        const { onClick } = this.props

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
                <TouchableOpacity onPress={e => {
                    e.preventDefault()
                    let text = this.state.text
                    if(!text.trim()) {
                        this.textInput.focus()
                        return
                    }
                    else {
                        this.setState({
                            text: ''
                        })
                        onClick(text)
                    }

                }} style={styles.field_button}>
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

AddTodo.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default AddTodo
