/**
 * Created by kissy小鬼 on 16/6/13上午9:23.
 */
import React, {
    Component,
    PropTypes,
    View,
    Text,
    StyleSheet
} from 'react-native'

import Product from './Product'

class Cart extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { products, total } = this.props

        const hasProducts = products.length > 0
        const nodes = !hasProducts ?
            <Text style={styles.mgl15}>购物车空空如也，赶快添加吧~</Text> :
            products.map(product =>
                <Product
                    title={product.title}
                    price={product.price}
                    quantity={product.quantity}
                    key={product.id}/>
            )

        return (
            <View style={styles.cart}>
                {nodes}
                <View style={[styles.total, styles.pdr15]}>
                    <Text style={styles.totalText}>总计：￥{total}</Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    cart: {
        flex: 1,
        marginTop: 10,
        paddingTop: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#DDD',
        borderBottomColor: '#DDD',
        backgroundColor: '#FFF',
        justifyContent: 'center'
    },
    total: {
        justifyContent: 'center',
        borderTopWidth: 1,
        marginTop: 10,
        borderTopColor: '#DDD',
        height: 50,
        alignItems: 'flex-end'
    },
    mgl15: {
        marginLeft: 15
    },
    pdr15: {
        paddingRight: 15
    },
    totalText: {
        fontSize: 16,
        color: '#c9242b'
    }
})

Cart.propTypes = {
    products: PropTypes.array,
    total: PropTypes.string
}

export default Cart