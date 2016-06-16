/**
 * Created by kissy小鬼 on 16/6/16-下午3:35.
 */
import React, {
    Component
} from 'react-native'
import { connect } from 'react-redux'
import Index from '../views/index/index'

class StrollingContainer extends Component {
    render() {
        return (
            <Index {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {

    const { strolling } = state

    return {
        strolling
    }

}


export default connect(
    mapStateToProps
)(StrollingContainer)
