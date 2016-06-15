/**
 * Created by kissy小鬼 on 16/6/6下午6:21.
 */
import React, {
    Component,
    View,
    Text,
    Picker,
    PropTypes
} from 'react-native'

class UIPicker extends Component {

    constructor(props) {
        super(props)
        this.state = {
            language: ''
        }
    }

    _handleValueChange = (itemValue) => {
        this.setState({
            language: itemValue
        })
    };

    render() {

        const { value, onChange, options } = this.props

        return (
            <View>
                <Picker
                    prompt="请选择编程语言"
                    mode={"dialog"}
                    style={{flex:1}}
                    selectedValue={value}
                    onValueChange={(value) => onChange(value)}>
                    { options.map(option => <Picker.Item key={option} label={option} value={option} /> ) }
                </Picker>
            </View>
        )
    }

}

UIPicker.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
    )
}

export default UIPicker