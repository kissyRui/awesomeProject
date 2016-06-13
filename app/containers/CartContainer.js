/**
 * Created by kissy小鬼 on 16/6/13上午9:36.
 */
import React, {
    Component,
    PropTypes
} from 'react-native'

import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { getCartProducts, getTotal } from '../reducers'

class CartContainer extends Component {

    render() {

        const { products, total } = this.props

        return (
            <Cart
                products={products}
                total={total} />
        )
    }

}

CartContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    total: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        products: getCartProducts(state),
        total: getTotal(state)
    }
}

export default connect(mapStateToProps)(CartContainer)