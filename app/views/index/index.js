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
    RefreshControl,
    ListView
} from 'react-native'

import Swiper from 'react-native-swiper'
import SearchHeader from '../../components/SearchHeader'
import ShoppingCart from '../../views/ShoppingCart'
import { fetchBanners, fetchFeeds } from '../../actions/strollingActions'
import Constants from '../../constants/Constants'
import Loading from '../../common/Loading'
import LoadMoreFooter from '../../common/LoadMoreFooter'

let page = 1
let canLoadMore = false
let isRefreshing = false
let isLoading = true

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
            dispatch(fetchFeeds(page, canLoadMore, isRefreshing, isLoading))
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

        } else {

            let feedCellStyle = [styles.feedCell];
            let sourceFontStyle = [styles.sourceFont];
            let plainContentStyle = [styles.plainContent];
            let plainPVFontStyle = [styles.plainPVFont];

            if (data.background) {
                feedCellStyle.push({height: 200})
                sourceFontStyle.push({color: 'white'})
                plainContentStyle.push({color: 'white'})
                plainPVFontStyle.push({color: 'white'})
            }

            let imageSource = data.background ? data.background : 'img_default_home_cover'

            return (
                <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={this._onPressFeedItem.bind(this, data)}>
                    <View style={feedCellStyle}>
                        {data.background ?
                            <Image
                                style={styles.feedImage}
                                source={{uri: imageSource}}
                                >
                                <View style={styles.plainTitleContainer}>
                                    <Text style={sourceFontStyle}>{data.source}</Text>
                                </View>
                                <Text style={plainContentStyle}>{data.title}</Text>
                                <Text style={plainPVFontStyle}>{data.tail}</Text>
                            </Image>
                            :
                            <View style={styles.plainFeed}>
                                <View style={styles.plainTitleContainer}>
                                    <Text style={sourceFontStyle}>{data.source}</Text>
                                </View>
                                <Text style={plainContentStyle}>{data.title}</Text>
                                <Text style={plainPVFontStyle}>{data.tail}</Text>
                            </View>
                        }
                    </View>
                </TouchableOpacity>
            )

        }

    }

    _onPressFeedItem(feedItem) {
        alert(feedItem.title)
    }

    render() {

        const { strolling } = this.props

        let bannerList = strolling['bannerList']
        let feedList = strolling['feedList']

        let sourceData = {
            'banner': [bannerList],
            'feed': feedList
        }

        let sectionIDs = ['banner', 'feed']

        let rowIDs = [[0]]

        let row = []

        for(let i = 0; i < feedList.length; i++) {
            row.push(i)
        }

        rowIDs.push(row)

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

                {
                    strolling.isLoading ?
                        <Loading/> :
                        <ListView
                            dataSource={this.state.dataSource.cloneWithRowsAndSections(sourceData, sectionIDs, rowIDs)}
                            renderRow={this._renderRow}
                            initialListSize={1}
                            enableEmptySections={true}
                            onScroll={this._onScroll}
                            onEndReached={this._onEndReach.bind(this)}
                            onEndReachedThreshold={10}
                            renderFooter={this._renderFooter.bind(this)}
                            style={{height: Constants.window.height - 64}}
                            refreshControl={
                                <RefreshControl
                                    tintColor="#ff0000"
                                    refreshing={strolling.isRefreshing}
                                    onRefresh={this._onRefresh.bind(this)}
                                    title="努力加载中……"
                                    color="#CCC" />
                            }/>
                }

            </View>
        )
    }

    _onScroll() {
        if (!canLoadMore) canLoadMore = true
    }

    _onRefresh() {
        page = 1
        const {dispatch} = this.props
        canLoadMore = false
        isRefreshing = true
        dispatch(fetchBanners())
        dispatch(fetchFeeds(page, canLoadMore, isRefreshing))
    }

    _renderFooter() {
        const {strolling} = this.props
        if (strolling.isLoadMore) {
            return <LoadMoreFooter />
        }
    }

    _onEndReach() {
        if(canLoadMore) {
            page++
            const {dispatch} = this.props
            dispatch(fetchFeeds(page, canLoadMore, false))
            canLoadMore = false
        }
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
    },
    feedImage: {
        height: 185,
        width: Constants.window.width - 15 * 2,
        paddingLeft: 15,
        paddingTop: 30,
    },
    plainFeed: {
        paddingLeft: 15,
        shadowColor: 'gray',
        shadowOffset: {x: 1.5, y: 1},
        shadowOpacity: 0.5,
        backgroundColor: 'white',
        marginBottom: 3,
    },

    plainTitleContainer: {
        marginTop: 30,
        paddingLeft: 5,
        borderLeftColor: 'red',
        borderLeftWidth: 2,
    },
    feedCell: {
        padding: 15,
        paddingBottom: 0,
        overflow: 'hidden',
    },
    sourceFont: {
        color: 'gray',
        fontSize: 13,
    },
    plainContent: {
        marginTop: 30,
        fontWeight: 'bold',
        fontSize: 15,
        marginRight: 15,
    },
    plainPVFont: {
        marginTop: 20,
        marginBottom: 20,
        color: 'gray',
        fontSize: 13,
    }
})

export default Index
