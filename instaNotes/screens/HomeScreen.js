import React from 'react';
import Swiper from 'react-native-swiper';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

const styles = StyleSheet.create({
  wrapper:{
    },

slide1: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#9DD6EB',
},
slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
},
text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: 'bold',
}

})

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide1}>
            <Text style={styles.slide1}>Beautiful</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
    );
  }
}