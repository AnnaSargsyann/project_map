import React from 'react';
import { StyleSheet,TouchableOpacity, Text,ScrollView, View } from 'react-native';
import { Icon } from "react-native-elements"
export default class FirstPage extends React.Component {

  render(){
    return (

  <ScrollView style={styles.containe}>
          <Text style={styles.container}>first page  </Text>
        <View
          style={styles.bottomButtons}>

					<TouchableOpacity onPress={this.onPressButton}>

						<Icon
							reverse
							name='history'
							color='#FFF'
							reverseColor="#222"
							raised
						/>
					</TouchableOpacity>


					<Icon
						reverse
						name='airplanemode-active'
						color='#FFF'
						reverseColor="#222"
						raised
					/>
					<Icon
						reverse
						name='location-on'
						color='#FFF'
						reverseColor="#222"
						raised
					/>


      </View>
    </ScrollView>
		);
	}
}


const styles = StyleSheet.create({
  containe: {
    flex: 1,
    backgroundColor: 'gray'
  },
  container: {
    flex: 0.5, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
	menuButton: {
		flex: 1,
		position: "absolute",
		top: 5,
		left: 5,
	},
	bottomButtons: {
		flex: 1,
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "stretch",
	},

});
