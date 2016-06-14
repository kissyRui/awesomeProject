/**
 * Created by kissy小鬼 on 16/6/14-下午3:40.
 */

'use strict';

const React = require('react-native');
const {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    StatusBar,
    } = React;

exports.framework = 'React';
exports.title = '<StatusBar>';
exports.description = 'Component for controlling the status bar';

const colors = [
    '#ff0000',
    '#00ff00',
    '#0000ff',
];

const barStyles = [
    'default',
    'light-content',
];

const showHideTransitions = [
    'fade',
    'slide',
];

const StatusBarExample = React.createClass({
    getInitialState(): State {
        return {
            animated: true,
            backgroundColor: this._getValue(colors, 0),
            hidden: false,
            ShowHideTransition: 'fade',  // 'slide'
            translucent: false,
            barStyle: 'default',
            showHideTransition: this._getValue(showHideTransitions, 0),
            networkActivityIndicatorVisible: false
        };
    },

    _colorIndex: 0,
    _barStyleIndex: 0,
    _showHideTransitionIndex: 0,

    _getValue(values: Array<any>, index: number): any {
        return values[index % values.length];
    },

    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor={this.state.backgroundColor}
                    translucent={this.state.translucent}
                    hidden={this.state.hidden}
                    showHideTransition={this.state.showHideTransition}
                    animated={this.state.animated}
                    barStyle={this.state.barStyle}
                    networkActivityIndicatorVisible={this.state.networkActivityIndicatorVisible}
                    />

                <View>
                    <TouchableHighlight
                        style={styles.wrapper}
                        onPress={() => this.setState({animated: !this.state.animated})}>
                        <View style={styles.button}>
                            <Text>animated: {this.state.animated ? 'true' : 'false'}</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View>
                    <TouchableHighlight
                        style={styles.wrapper}
                        onPress={() => this.setState({hidden: !this.state.hidden})}>
                        <View style={styles.button}>
                            <Text>hidden: {this.state.hidden ? 'true' : 'false'}</Text>
                        </View>
                    </TouchableHighlight>
                </View>


                <Text style={styles.title}>iOS</Text>
                <View>
                    <TouchableHighlight
                        style={styles.wrapper}
                        onPress={() => {
              this._barStyleIndex++;
              this.setState({barStyle: this._getValue(barStyles, this._barStyleIndex)});
            }}>
                        <View style={styles.button}>
                            <Text>style: '{this._getValue(barStyles, this._barStyleIndex)}'</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View>
                    <TouchableHighlight
                        style={styles.wrapper}
                        onPress={() => this.setState({
              networkActivityIndicatorVisible: !this.state.networkActivityIndicatorVisible,
            })}>
                        <View style={styles.button}>
                            <Text>
                                networkActivityIndicatorVisible:
                                {this.state.networkActivityIndicatorVisible ? 'true' : 'false'}
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View>
                    <TouchableHighlight
                        style={styles.wrapper}
                        onPress={() => {
              this._showHideTransitionIndex++;
              this.setState({
                showHideTransition:
                this._getValue(showHideTransitions, this._showHideTransitionIndex),
              });
            }}>
                        <View style={styles.button}>
                            <Text>
                                showHideTransition:
                                '{this._getValue(showHideTransitions, this._showHideTransitionIndex)}'
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>



                <Text style={styles.title}>Android</Text>


                <View>
                    <TouchableHighlight
                        style={styles.wrapper}
                        onPress={() => {
              this._colorIndex++;
              this.setState({backgroundColor: this._getValue(colors, this._colorIndex)});
            }}>
                        <View style={styles.button}>
                            <Text>backgroundColor: '{this._getValue(colors, this._colorIndex)}'</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View>
                    <TouchableHighlight
                        style={styles.wrapper}
                        onPress={() => {
              this.setState({
                translucent: !this.state.translucent,
                backgroundColor: !this.state.translucent ? 'rgba(0, 0, 0, 0.4)' : 'black',
              });
            }}>
                        <View style={styles.button}>
                            <Text>translucent: {this.state.translucent ? 'true' : 'false'}</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    },
});

var styles = StyleSheet.create({
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        borderRadius: 5,
        backgroundColor: '#eeeeee',
        padding: 10,
    },
    title: {
        marginTop: 16,
        marginBottom: 8,
        fontWeight: 'bold',
    }
});

export default StatusBarExample