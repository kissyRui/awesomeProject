/**
 * Created by kissy小鬼 on 16/6/12下午1:20.
 */
import React, {
    Component,
    View,
    Text,
    PropTypes,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import Product from './Product'
import constants from '../constants/Constants'

class ProductItem extends Component {

    render() {

        const { product, onAddToCartClicked } = this.props

        return (
            <View style={styles.productItem}>
                <Product title={product.title} price={product.price} />
                <TouchableOpacity style={styles.addButton} onPress={onAddToCartClicked}>
                    <Text style={styles.addButtonText}>{product.inventory > 0 ? '添加到购物车' : '卖完了'}</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

ProductItem.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
    }).isRequired,
    onAddToCartClicked: PropTypes.func.isRequired
}

const styles = StyleSheet.create({

    productItem: {
        flex: 1,
        height: 53,
        flexDirection: 'row',
        borderBottomWidth: 1,
        backgroundColor: '#FFF',
        borderBottomColor: '#d9d9d9'
    },

    addButton: {
        height: 52,
        paddingRight: 15,
        justifyContent: 'center'
    },

    addButtonText: {
        color: constants.colors.themeColor,
        fontSize: 14
    }
})

export default ProductItem