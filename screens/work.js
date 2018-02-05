import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TabNavigator} from 'react-navigation'
import First from "./first";
import Second from "./second"
const Work = TabNavigator({
  First:{
    screen:First,
  },
  Second: {
    screen:Second,
  }
})
export default Work;
