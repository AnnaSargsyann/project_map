import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TabNavigator} from 'react-navigation'
import MainScreen from './Main'
import ListScreen from './List'
const Tabs = TabNavigator({
	Main:{
		screen:MainScreen
	},
	List:{
		screen:ListScreen
	}
});
export default Tabs;