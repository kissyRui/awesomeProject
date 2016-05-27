import React, {
    Component
} from 'react';

import {
    View,
    Text,
    NetInfo
} from 'react-native';

class NetState extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isConnected: null
        };
        // bind处理方式
        // this._handleConnectivityChange = this._handleConnectivityChange.bind(this)
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener(
          'change',
          this._handleConnectivityChange
        );
    }

    componentDidMount() {
        // 单纯获取网络状态
        NetInfo.isConnected.fetch().done((isConnected) => {
            this.setState({
                isConnected
            });
        });
        // 监听网络状态
        NetInfo.isConnected.addEventListener(
            'change',
            this._handleConnectivityChange
        );
    }

    _handleConnectivityChange = (isConnected) => {
        this.setState({
          isConnected
        });
    }

    render() {
        return (
            <View>
                <Text>初次获取网络：{this.state.isConnected ? '在线' : '离线'}</Text>
            </View>
        )
    }

}

export default NetState;
