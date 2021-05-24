import {
	createStackNavigator, createSwitchNavigator} from 'react-navigation'

import React from 'react';
import { BackHandler } from "react-native";
import SplashScreen from './SplashScreen'
import { connect } from 'react-redux';
import { createReduxContainer, createReactNavigationReduxMiddleware, } from 'react-navigation-redux-helpers';
import DashboardScreen from './Screens/DashboardScreen';

const LoginStack = createStackNavigator(
	{
		SplashScreen: SplashScreen,
		DashboardScreen : DashboardScreen
	},
	{ headerMode: 'none' });

export const AppNavigation = createSwitchNavigator(
	{
		Launcher: LoginStack
	},
	{
		initialRouteName: "Launcher"
	}
);

export const middleware = createReactNavigationReduxMiddleware(
	state => state.nav,
);

const App = createReduxContainer(AppNavigation);

// create nav component
class ReduxNavigation extends React.Component {
	componentDidMount() {
		BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
	}
	componentWillUnmount() {
		BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
	}

	onBackPress = () => {
		// handle global backpressed
	};

	render() {
		const { navigation, dispatch } = this.props
		return <App state={navigation} dispatch={dispatch} />;
	}
}

const mapStateToProps = state => ({
	navigation: state.nav,
});
export default connect(mapStateToProps)(ReduxNavigation);