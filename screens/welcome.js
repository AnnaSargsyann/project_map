import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
export default class Welcome extends React.Component{ 
	static navigationOptions={
		header:null
	}
	getStarted(){
		this.props.navigation.navigate("AppView")
	}
	render() {
		return(
			<View style={styles.title}>	
				<Text>Welcome to Gyumri	</Text>
				<Button title="Get Started" onPress={()=>{
					this.getStarted()
				}}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	title: {
		flex:2,
		alignItems: 'center',
		justifyContent:'center' 
	}
})