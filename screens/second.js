import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const util = require("util")
export default class ListScreen extends React.Component {
	static navigationOptions={
		title:"example"
	}
  render() {
	let navigator = this.props.navigation
	let params = this.props.navigation.state.params || {name:"map"};
	console.log(" "+util.inspect(params,false,true))

    return (
      <View style={styles.container}>
        <Text>Hello {params.name}</Text>
	  <Button
	  onPress={()=>{
		navigator.goBack()
	  }}
	  title="click  me"
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
