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

        return (
            !active ? <TouchableOpacity style={styles.link} onPress={e => {
                e.preventDefault()
                onClick()
            }}>
            {children}
            </TouchableOpacity> : <View style={[styles.link, styles.link_cur]}>{children}</View>
        )
    }

}

const styles = StyleSheet.create({
    link: {
        flex: 1,
        height: 40,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    link_cur: {
        backgroundColor: '#DDD',
    }
})

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
