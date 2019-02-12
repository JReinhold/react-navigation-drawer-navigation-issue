import React from 'react';
import {
	createAppContainer,
	createDrawerNavigator,
	createSwitchNavigator,
	createStackNavigator,
	DrawerItems,
} from 'react-navigation';
import { SafeAreaView, Text, Button } from 'react-native';

class FirstSwitchScreen extends React.Component {
	componentDidMount() {
		console.log('FirstSwitchScreen didMount');
	}

	render() {
		console.log('FirstSwitchScreen render');
		return (
			<SafeAreaView style={{ backgroundColor: 'lightblue', flex: 1 }}>
				<Text>First Switch Screen</Text>
				<Button
					title="Go to first drawer screen"
					onPress={() => this.props.navigation.navigate('FirstDrawer')}
				/>
			</SafeAreaView>
		);
	}
}

class FirstDrawerScreen extends React.Component {
	componentDidMount() {
		console.log('FirstDrawerScreen didMount');
	}

	render() {
		console.log('FirstDrawerScreen render');
		return (
			<SafeAreaView style={{ backgroundColor: 'lightpink', flex: 1 }}>
				<Text>First Drawer Screen</Text>
				<Button title="Toggle Drawer" onPress={() => this.props.navigation.toggleDrawer()}/>
			</SafeAreaView>
		);
	}
}

class SecondDrawerScreen extends React.Component {
	componentDidMount() {
		console.log('SecondDrawerScreen didMount');
	}

	render() {
		console.log('SecondDrawerScreen render');
		return (
			<SafeAreaView style={{ backgroundColor: 'lightgreen', flex: 1 }}>
				<Text>Second Drawer Screen</Text>
				<Button
					title="Go to first switch screen"
					onPress={() => this.props.navigation.navigate('FirstSwitch')}
				/>
			</SafeAreaView>
		);
	}
}

class GoToFirstSwitchFromDrawerScreen extends React.Component {
	async componentDidMount() {
		console.log('GoToFirstSwitchFromDrawerScreen didMount pre navigate');
		// UNCOMMENT THIS LINE TO MAKE IT WORK AS INTENDED
		// await Promise.resolve();
		this.props.navigation.navigate('FirstSwitch');
		console.log('GoToFirstSwitchFromDrawerScreen didMount post navigate');
	}

	render() {
		console.log('GoToFirstSwitchFromDrawerScreen render');
		return (
			<SafeAreaView style={{ backgroundColor: 'yellow', flex: 1 }}>
				<Text>Go To First Switch From Drawer Screen</Text>
			</SafeAreaView>
		);
	}
}

const AppNavigator = createAppContainer(
	createSwitchNavigator({
		FirstSwitch: FirstSwitchScreen,
		DrawerNav: createDrawerNavigator({
			FirstDrawer: FirstDrawerScreen,
			SecondDrawer: SecondDrawerScreen,
			GoToFirstSwitchFromDrawer: GoToFirstSwitchFromDrawerScreen,
		}),
	}),
);

const App = () => (
	<AppNavigator
	 onNavigationStateChange={console.log}
	/>
);

export default App;
