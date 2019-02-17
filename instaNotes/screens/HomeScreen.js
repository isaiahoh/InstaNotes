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
  Dimensions,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  wrapper:{
    },
  stretch: {
    width: 50,
    height: 200
  },

slide1: {
  flex: 1,
  flexDirection: "column",
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  backgroundColor: '#6C479C',
},
slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
},
slide3: {
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

});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide1}>
            <Text style={styles.slide1}>Beautiful</Text>
            <Image
              resizeMode = 'contain'
              style = {{width: Dimensions.get('window').width, height: 1200}}
              source={require('../assets/images/logo.png')}
            />
          </View>

            <View style={styles.slide2}>
                <Text style={styles.text}>And simple</Text>

            </View>


            <View style={styles.slide3}>
            <Text style={styles.text}>Home</Text>
          </View>
        </Swiper>
    );
  }}
