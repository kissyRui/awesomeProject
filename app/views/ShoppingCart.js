/**
 * Created by kissy小鬼 on 16/6/12上午7:51.
 */
import React, {
    View,
    Text,
    StyleSheet,
    Component
} from 'react-native'

import { connect } from 'react-redux'

import ProductsContainer  from '../containers/ProductsContainer'

class ShoppingCart extends Component {

    render() {
        return (
            <View style={styles.main}>
                <ProductsContainer />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column'
    }
})



export default ShoppingCart
