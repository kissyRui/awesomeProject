/**
 * Created by kissy小鬼 on 16/6/12下午12:44.
 */
import React, {
    Component,
    View,
    PropTypes
} from 'react-native'

import { connect } from 'react-redux'
import { getAllProducts, addToCart } from '../actions/shoppingCart'
import { getVisibleProducts } from '../reducers/products'
import Product from '../components/Product'
import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'

class ProductsContainer extends Component {

    //componentDidMount() {
    //    const { dispatch } = this.props
    //    dispatch(getAllProducts())
    //}

    constructor(props) {
        super(props)
    }

    render() {

        const { products, onClick } = this.props

        return (
            <View>
                {
                    products.length > 0 ?
                        <ProductsList title="产品列表">
                            {
                                products.map(product =>
                                        <ProductItem
                                            key={product.id}
                                            product={product}
                                            onAddToCartClicked={() => onClick(product.id) }/>
                                )
                            }
                        </ProductsList> : null
                }
            </View>
        )
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
    })).isRequired,
    onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        products: getVisibleProducts(state.products)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => {
            dispatch(addToCart(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer)
