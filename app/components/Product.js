/**
 * Created by kissy小鬼 on 16/6/12下午1:52.
 */
import React, {
    Component,
    PropTypes,
    View,
    Text,
    StyleSheet
} from 'react-native'

class Product extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { title, price, quantity } = this.props

        return (
            <View style={styles.product}>
                <Text>{title}-￥{price} {quantity ? ` x ${quantity}` : null}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    product: {
        flex: 1,
        height: 52,
        paddingLeft: 15,
        justifyContent: 'center'
    }
})

Product.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
}

export default Product