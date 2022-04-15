import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import { Container } from './styles';
import loadAnimatedCar from '../../assets/load_animated_car.json';

export function LoadAnimation() {
	return (
		<Container>
			<AnimatedLottieView
				autoPlay
				source={loadAnimatedCar}
				style={{ height: 200 }}
				resizeMode={'contain'}
				loop
			/>
		</Container>
	);
}
