import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['rgb(26,206,153)', 'rgb(79,221,82)']}>
          <TouchableOpacity
            style={{
              height: 50,
              width: 250,
              //alignSelf: 'stretch',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              //backgroundColor: 'rgb(251,82,82)',
              marginHorizontal: 50,
            }}
            onPress={() => {
              console.warn(global.HermesInternal ? 'enable' : 'disable');
            }}>
            <Text style={{fontFamily: 'Vazir FD', color: 'white'}}>تاپ فن</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}
export default App;
