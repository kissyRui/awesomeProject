/**
 * Created by kissy小鬼 on 16/6/14-下午6:09.
 */
import React, {
    Component,
    View,
    TabBarIOS
} from 'react-native'

import Todos from '../views/Todos'
import Reddit from '../views/Reddit'
import ShoppingCart from '../views/ShoppingCart'
import Constants from '../constants/Constants'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// TabBar Items
const tabBarItems = [
    {
        title: 'Todos',
        icon: 'heart',
        component: Todos
    },
    {
        title: 'Reddit',
        icon: 'heart',
        component: Reddit
    },
    {
        title: 'ShoppingCart',
        icon: 'heart',
        component: ShoppingCart
    }
]

class TabBarView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedTab: tabBarItems[0].title
        }
    }

    render() {
        return (
            <TabBarIOS tintColor={Constants.colors.themeColor}>
                {
                    tabBarItems.map((item, i) => {
                            let Component = item.component
                            return (
                                <TabBarIOS.Item
                                    key={i}
                                    title={item.title}
                                    selected={this.state.selectedTab === item.title}
                                    onPress={() => {
                                    this.setState({
                                       selectedTab: item.title
                                    })
                                }}>
                                    <Component navigator={this.props.navigator} {...this.props}/>
                                </TabBarIOS.Item>
                            )
                        }
                    )
                }
            </TabBarIOS>
        )
    }

}

export default TabBarView
