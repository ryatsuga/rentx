import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CarDetails } from '../screens/CarDetails';
import { Home } from '../screens/Home';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { MyCars } from '../screens/MyCars';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
	return (
		<Navigator
			initialRouteName={'SignIn'}
			screenOptions={{ headerShown: false }}
		>
			<Screen name='Splash' component={Splash} />
			<Screen name='SignIn' component={SignIn} />
			<Screen
				name='Home'
				component={Home}
				options={{ gestureEnabled: false }}
			/>
			<Screen name='MyCars' component={MyCars} />
			<Screen name='CarDetails' component={CarDetails} />
			<Screen name='Scheduling' component={Scheduling} />
			<Screen name='SchedulingDetails' component={SchedulingDetails} />
			<Screen name='SchedulingComplete' component={SchedulingComplete} />
		</Navigator>
	);
}
