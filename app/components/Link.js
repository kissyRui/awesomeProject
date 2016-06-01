import React, {
    PropTypes,
    Component,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

class Link extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { active, children, onClick } = this.props

        if (active) {
            return <View style={styles.link}>{children}</View>
        }
        return (
            <TouchableOpacity style={styles.link} onPress={e => {
                e.preventDefault()
                onClick()
            }}>
            {children}
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    link: {
        flex: 1,
        height: 40,
        backgroundColor: '#08C',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
