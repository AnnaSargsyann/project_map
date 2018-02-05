import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const util = require("util")
export default class ListScreen extends React.Component {
	static navigationOptions={
		title:"List"
	}
  render() {
	let navigator = this.props.navigation
	let params = this.props.navigation.state.params || {name:"def"};
	console.log(" "+util.inspect(params,false,true))

    return (
      <View style={styles.container}>
        <Text>Hello {params.name}</Text>
	  <Button
	  onPress={()=>{
		navigator.goBack()
	  }}
	  title="Go Back" 
	  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
