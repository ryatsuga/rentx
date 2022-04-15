import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Container } from './styles';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';
import Animated, {
	Easing,
	Extrapolate,
	interpolate,
	runOnJS,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export function Splash() {
	const navigation = useNavigation();
	const splashAnimation = useSharedValue(0);

	function startApp() {
		navigation.navigate('Home' as never);
	}

	const brandStyle = useAnimatedStyle(() => {
		return {
			opacity: interpolate(
				splashAnimation.value,
				[0, 20, 40, 60, 80],
				[1, 0, 1, 0, 1],
				Extrapolate.CLAMP
			),
		};
	});

	useEffect(() => {
		splashAnimation.value = withTiming(
			80,
			{
				duration: 6000,
				easing: Easing.ease,
			},
			() => {
				'worklet';
				runOnJS(startApp)();
			}
		);
	}, []);

	return (
		<Container>
			<StatusBar style='light' />
			<Animated.View style={brandStyle}>
				<BrandSvg width={95} height={65} />
			</Animated.View>
		</Container>
	);
}
