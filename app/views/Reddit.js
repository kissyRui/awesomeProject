import React, {
    View,
    Text,
    StyleSheet,
    Component,
    PropTypes,
} from 'react-native'

import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded } from '../actions/reddit'
import UIPicker from '../components/UIPicker'
import Posts from '../components/Posts'

class Reddit extends Component {

    constructor(props) {
        super(props)
    }

    _handleChange = (nextReddit) => {
        this.props.dispatch(selectReddit(nextReddit))
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedReddit !== this.props.selectedReddit) {
            const { dispatch, selectedReddit } = nextProps
            dispatch(fetchPostsIfNeeded(selectedReddit))
        }
    }

    componentDidMount() {

        const { dispatch, selectedReddit } = this.props

        dispatch(fetchPostsIfNeeded(selectedReddit))

    }

    render() {

        const { selectedReddit, posts, isFetching, lastUpdated } = this.props

        const isEmpty = posts.length === 0

        return (
            <View style={styles.main}>

                <UIPicker value={selectedReddit}
                          onChange={this._handleChange}
                          options={[ 'reactjs', 'frontend' ]} />
                {
                    lastUpdated &&
                        <Text style={styles.statusTime}>
                            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
                        </Text>
                }
                {
                    isEmpty
                        ? (isFetching ? <View><Text>Loading...</Text></View> : <View><Text>Empty.</Text></View>)
                        : <Posts style={{ opacity: isFetching ? 0.5 : 1 }} posts={posts} />
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column'
    },
    statusTime: {
        color: 'red',
        fontSize: 14,
        margin: 5
    }
})

Reddit.propTypes = {
    selectedReddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {

    const { selectedReddit, postsByReddit } = state

    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsByReddit[selectedReddit] || {
        isFetching: true,
        items: []
    }

    return {
        selectedReddit,
        posts,
        isFetching,
        lastUpdated
    }

}

export default connect(mapStateToProps)(Reddit)
