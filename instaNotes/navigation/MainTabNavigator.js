import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import SettingsScreen from '../screens/SettingsScreen';
//import GalleryScreen from '../screens/GalleryScreen';
//import CameraScreen from '../screens/CameraScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

const CameraStack = createStackNavigator({
    Camera: CameraScreen,
});

CameraStack.navigationOptions = {
    tabBarLabel: 'Camera',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-camera' : 'md-camera'}
        />
    ),
};

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
        />
    ),
};
/*const CameraStack = createStackNavigator({
  Camera: CameraScreen,
});

CameraStack.navigationOptions = {
  tabBarLabel: 'Camera',
  tabBarIcon: ({ focused}) => (
      <TabBarIcon
        focused = {focused}
        name={Platform.OS === 'ios' ? 'ios-camera' : 'md-camera'}
      />
  )
}

const GalleryStack = createStackNavigator({
  Gallery: GalleryScreen,
});

GalleryStack.navigationOptions = {
  tabBarLabel: 'Gallery',
  tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused = {focused}
        name = {Platform.OS === 'ios' ? 'ios-menu' : 'logo-dropbox'}
      />
  )
}*/
export default createBottomTabNavigator({
    HomeStack,
    CameraStack,
    SettingsStack,
  //CameraStack,
  //GalleryStack
});
