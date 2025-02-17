// BottomTabBar.js

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomTabBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconContainer}>
        <Icon name="home" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CallHistory')} style={styles.iconContainer}>
        <Icon name="phone" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ChatHistory')} style={styles.iconContainer}>
        <Icon name="comments" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('UserProfile')} style={styles.iconContainer}>
        <Icon name="user" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.iconContainer}>
        <Icon name="cogs" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomTabBar;
