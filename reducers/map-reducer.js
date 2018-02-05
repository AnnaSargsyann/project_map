INITIAL_STATE = {
	initialRegion:{
		latitude: 37.78825,
		longitude: -122.4324,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	},
	myPosition:{
		title:"my Title",
		description:"My description",
		coordinate:{
			latitude: 37.78825,
			longitude: -122.4324
		}
	},
	markers:[{
		title:"my Title",
		description:"mMy description",
		coordinate:{
			latitude: 37.78825,
			longitude: -125.4324
		}
	}]
}
export default (state = INITIAL_STATE,action)=>{
	switch(action.type){
		case "CHANGE_LOCATION":
			let initialRegion = {...state.initialRegion,...action.payload};
			return  {...state,initialRegion:initialRegion}
		break
	}
	return state
}
