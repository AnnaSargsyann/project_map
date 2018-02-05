import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation'
import {Provider}	from "react-redux"
import store from "./store";
import Welcome from "./screens/welcome";
import AppView from "./screens/appview";
import Home from "./screens/Home"
import Tabs from "./screens/Tabs"
import Work from "./screens/work"
const AppNav = DrawerNavigator({
Home:{
	screen:Home,
},
Work: {
	screen:Work,
},
	Tabs:{
		screen:Tabs,
	}
  })
const AppNavigation = StackNavigator({
	AppView:{
		screen:AppNav
	},
	Welcome: {
	  screen: Welcome,
	}

  })



  export default class App extends React.Component{
	  render(){
			return(
			<Provider store={store}>
				<AppNavigation/>
			</Provider>
				)
	  }
  }
