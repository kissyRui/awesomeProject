/**
 * Created by kissy小鬼 on 16/6/8下午6:34.
 */
import { connect } from 'react-redux'
import { selectReddit } from '../actions/reddit'
import UIPicker from '../components/UIPicker'

const mapStateToProps = (state, ownProps) => {

    const { selectedReddit } = state

    return {
        value: selectedReddit,
        options: [ 'reactjs', 'frontend' ]
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChange: (nextReddit) => {
            dispatch(selectReddit(nextReddit))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UIPicker)
