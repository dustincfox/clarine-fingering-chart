/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Slider = require('react-native-slider');

var MOCKED_NOTE_DATA = [
  { name: 'A', fingering: 'http://i.imgur.com/hglNVNn.jpg', staff: 'http://i.imgur.com/pJcUhzo.jpg' }
];

var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} = React;

var ClarinetFingerings = React.createClass({

  getInitialState: function() {
    return { sliderValue: 0, minimumValue: 0, maximumValue: 10}
  },

  render: function() {
    var note = MOCKED_NOTE_DATA[0];
    return (
      <View style={styles.container}>
        <View style={styles.noteContainer}>
          <View style={styles.leftContainer}>
            <Image
                  source={{uri: note.staff}}
                  style={styles.staff} />
            <Text style={styles.name}>{note.name}</Text>
          </View>
          <View style={styles.rightContainer}>
            <Image
              source={{uri: note.fingering}}
              style={styles.fingering} />
          </View>
        </View>

        <Slider
          value={this.state.sliderValue}
          onValueChange={(value) => this.setState({sliderValue: value})}
          debugTouchArea={true}/>

      </View>
    );
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  trackStyle: {
    color: 'orange',
  },
  thubStyle: {
    color: 'red',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  noteContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  staff: {
    width: 53,
    height: 81,
    marginLeft: 10,
  },
  fingering: {
    width: 50,
    height: 80,
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
  }
});

AppRegistry.registerComponent('ClarinetFingerings', () => ClarinetFingerings);

