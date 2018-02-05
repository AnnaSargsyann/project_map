import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux'
import { Icon } from "react-native-elements"
const util = require("util")
class MainScreen extends React.Component {
	static navigationOptions = {
		header: null,
	}
	wachID = null;
	componentDidMount() {
		navigator.geolocation.getCurrentPosition((position) => {
			var latitude = position.coords.latitude;
			var longitude = position.coords.longitude;
			this.props.dispatch({ type: "CHANGE_LOCATION", payload: { latitude, longitude } })
		},
			error => {
				console.log(error)
			})
	}
	changeRegion(d) {
		//this.props.dispatch({ type: "CHANGE_LOCATION", payload: d })
	}
	onPressButton() {

	}
	openMenu() {
		this.props.navigation.navigate('DrawerOpen')
	}
	render() {
		return (
			<View style={styles.container}>
				<MapView style={styles.map}
					onRegionChange={(d) => {
						this.changeRegion(d)
					}}
					region={this.props.initialRegion}
				>
					{this.props.markers.map((d, index) => (
						<MapView.Marker key={index}
							coordinate={d.coordinate}
							title={d.title}
							description={d.description}
						>
							<View style={styles.radius}>
								<View style={styles.marker}>

								</View>
							</View>
						</MapView.Marker>
					))}
					<MapView.Marker
						coordinate={this.props.myPosition.coordinate}
						title={this.props.myPosition.title}
						description={this.props.myPosition.description}
					>
					</MapView.Marker>
				</MapView>

				<View style={styles.menuButton}>
					<Icon
						onPress={() => {
							this.openMenu()
						}}
						name="menu"
						color='#222'
						size={35}
					>
					</Icon>

				</View>

				<View
					style={styles.bottomButtons}
				>
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


			</View>
		);
	}
}

const styles = StyleSheet.create({
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
	radius: {
		height: 50,
		width: 50,
		borderRadius: 25,
		overflow: "hidden",
		backgroundColor: "rgba(0,122,255,0.2)",
		borderWidth: 1,
		borderColor: "rgba(0,122,255,0.8)",
		alignItems: 'center',
		justifyContent: 'center'
	},
	marker: {
		height: 20,
		width: 20,
		borderRadius: 10,
		backgroundColor: "#007AFF",
		borderWidth: 3,
		borderColor: "white",
		overflow: "hidden",
	},
	container: {
		marginTop: 20,
		flex: 1,
		backgroundColor: '#555',
	},
	map: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
});
const mapActionToProps = (dispatch) => ({
	dispatch
})
export default connect(
	({ mapReducer }) => {
		return mapReducer
	}, mapActionToProps
)(MainScreen)
