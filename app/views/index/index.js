/**
 * Created by kissy小鬼 on 16/6/16-下午3:19.
 */
import React, {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    InteractionManager,
    Component,
    Image,
    ListView
} from 'react-native'

import Swiper from 'react-native-swiper'
import SearchHeader from '../../components/SearchHeader'
import ShoppingCart from '../../views/ShoppingCart'
import { fetchBanners } from '../../actions/strollingActions'
import Constants from '../../constants/Constants'

class Index extends Component {

    constructor(props) {
        super(props)

        this._renderRow = this._renderRow.bind(this)

        this.state = {
            dataSource: new ListView.DataSource({
                getRowData: (data, sectionID, rowID) => {
                    return data[sectionID][rowID]
                },
                getSectionHeaderData: (data, sectionID) => {
                    return data[sectionID]
                },
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (section1, section2) => section1 !== section2
            })
        }
    }

    componentDidMount() {
        const {dispatch} = this.props
        InteractionManager.runAfterInteractions(() => {
            dispatch(fetchBanners())
        })
    }

    _renderRow(data, sectionID, rowID) {

        if (sectionID == 'banner') {
            let bannerList = data
            return (
                <Swiper
                    height={200}
                    loop={true}
                    autoplay={true}
                    dot={<View style={styles.customDot} />}
                    activeDot={<View style={styles.customActiveDot} />}
                    paginationStyle={{
                        bottom: 10
                    }}>
                    {
                        bannerList.map((banner) => {
                            return (
                                <TouchableOpacity
                                    key={banner.position}
                                    activeOpacity={0.75}>
                                    <Image
                                        style={styles.bannerImage}
                                        source={{uri: banner['image_key']}}
                                        />
                                </TouchableOpacity>
                            )
                        })
                    }
                </Swiper>
            )

        }

    }

    render() {

        const { strolling } = this.props

        let bannerList = strolling['bannerList']

        let sourceData = {
            'banner': [bannerList]
        }

        let sectionIDs = ['banner']

        let rowIDs = [[0]]

        return (
            <View style={styles.main}>
                <SearchHeader
                    searchAction={() => {
                        InteractionManager.runAfterInteractions(() => {
                            this.props.navigator.push({
                                name: 'ShoppingCart',
                                component: ShoppingCart
                            })
                        })
                    }}
                    scanAction={() => alert('scan') }/>
                <ListView
                    dataSource={this.state.dataSource.cloneWithRowsAndSections(sourceData, sectionIDs, rowIDs)}
                    renderRow={this._renderRow}
                    initialListSize={1}
                    enableEmptySections={true} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column'
    },
    bannerImage: {
        height: 200,
        width: Constants.window.width
    },
    customDot: {
        backgroundColor: '#CCC',
        height: 1.5,
        width: 15,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
    },
    customActiveDot: {
        backgroundColor: 'white',
        height: 1.5,
        width: 15,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
    }
})

export default Index
