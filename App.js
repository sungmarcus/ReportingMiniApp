import React from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from "react-native"

import Amplify, { API, graphqlOperation } from "aws-amplify"
import config from "./aws-exports"
import { createReport } from "./src/graphql/mutations"
import { listReports } from "./src/graphql/queries"

Amplify.configure(config)

export default class App extends React.Component {
	state = {
		name: "",
		description: "",
		longitude: 0,
		latitude: 0,
		reports: []
	}
  async componentDidMount() {
        try {
            const reports = await API.graphql(graphqlOperation(listReports))
            this.setState({ reports: reports.data.listReports.items })
        } catch (err) {
            console.log("error: ", err)
        }
    }
	onChangeText = (key, val) => {
		this.setState({ [key]: val })
	}

	findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
		const latitude = position.coords.latitude
		const longitude = position.coords.longitude

        this.setState({ longitude: longitude, latitude: latitude});
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  addReport = async event => {
	//this.findCoordinates()
	this.setState({name: "sungm", latitude: 53.343832, longitude: -6.251728 })
	const { name, description,longitude,latitude, reports} = this.state

	event.preventDefault()

	const input = {
		name,
		description,
		longitude,
		latitude
	}

	const result = await API.graphql(graphqlOperation(createReport, { input }))

	const newReport= result.data.createReport
	const updatedReport= [newReport, ...reports]
	this.setState({ reports: updatedReport, name: "" ,description: "",longitude: 0,latitude: 0})
		
}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					value={this.state.description}
					onChangeText={val => this.onChangeText("description", val)}
					placeholder='Add a Report'
				/>
				<TouchableOpacity onPress={this.addReport} style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Add +</Text>
				</TouchableOpacity>
        <ScrollView style={{ margin: 20 }}>
					{this.state.reports.map((item, index) => (
						<View key={index} style={styles.todo}>
							<Text style={styles.name}>{item.description}</Text>
							<Text style={styles.name}>{item.longitude}</Text>
							<Text style={styles.name}>{item.latitude}</Text>
						</View>
					))}
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingHorizontal: 10,
		paddingTop: 50
	},
	input: {
		height: 50,
		borderBottomWidth: 2,
		borderBottomColor: "blue",
		marginVertical: 10
	},
	buttonContainer: {
		backgroundColor: "#34495e",
		marginTop: 10,
		marginBottom: 10,
		padding: 10,
		borderRadius: 5,
		alignItems: "center"
	},
	buttonText: {
		color: "#fff",
		fontSize: 24
  },
  todo: {
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        paddingVertical: 10
    },
    name: { fontSize: 16 }
})