import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import MainScreen from './Main';
import ListScreen from './List';
const Home = StackNavigator({
	Main:{
		screen:MainScreen
	},
	List:{
		screen:ListScreen
	}
});
export default Home;