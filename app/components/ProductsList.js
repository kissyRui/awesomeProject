/**
 * Created by kissy小鬼 on 16/6/12下午2:34.
 */
import React, {
    Component,
    View,
    Text,
    PropTypes,
    StyleSheet
} from 'react-native'

import constants from '../constants/Constants'

class ProductsList extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { title, children } = this.props

        return (
            <View>
                <View style={styles.productTitle}><Text style={styles.productTitleText}>{title}</Text></View>
                {children}
            </View>
        )
    }

}

ProductsList.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    productTitle: {
        flex: 1,
        height: 40,
        backgroundColor: constants.colors.themeColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    productTitleText: {
        color: '#FFF'
    }
})

export default ProductsList