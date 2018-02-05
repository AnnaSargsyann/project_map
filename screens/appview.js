import React,{Component} from 'react';
import { View , StyleSheet} from 'react-native';
import {DrawerNavigator} from 'react-navigation'
import { Button } from 'react-native-elements';
import Home from "./Home"
import Tabs from "./Tabs"


const AppNav = DrawerNavigator({
Home:{
	screen:Home,
},
	Tabs:{
		screen:Tabs,
	}
  })
export default class AppView extends  Component{
	static navigationOptions={
		header:null
	}
	
	render(){
		return (
			<View>
				<AppNav/>

			</View>
		)
	}
}
const styles = StyleSheet.create({
	menuButton: {
		flex: 1,
		position: "absolute",
		top: 5,
		left: 5,
	}
})
