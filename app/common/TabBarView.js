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
        icon: 'home',
        component: Todos
    },
    {
        title: 'Reddit',
        icon: 'book',
        component: Reddit
    },
    {
        title: 'ShoppingCart',
        icon: 'star',
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
                                <FontAwesome.TabBarItem
                                    key={i}
                                    title={item.title}
                                    iconName={item.icon}
                                    selectedIconName={item.icon}
                                    selected={this.state.selectedTab === item.title}
                                    onPress={() => {
                                    this.setState({
                                       selectedTab: item.title
                                    })
                                }}>
                                    <Component navigator={this.props.navigator} {...this.props}/>
                                </FontAwesome.TabBarItem>
                            )
                        }
                    )
                }
            </TabBarIOS>
        )
    }

}

export default TabBarView
