import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useTheme } from 'styled-components';
import { Accessory } from '../../components/Accessory';
import { BackButtton } from '../../components/BackButtton';
import { ImageSlider } from '../../components/ImageSlider';
import {
	Container,
	Header,
	CarImages,
	Details,
	Description,
	Brand,
	Model,
	Rent,
	Period,
	Price,
	About,
	Accessories,
	Footer,
} from './styles';

import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';
import { formatReal } from '../../utils/formatReal';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedScrollHandler,
	useAnimatedStyle,
	useSharedValue,
} from 'react-native-reanimated';

interface Params {
	car: CarDTO;
}

export function CarDetails() {
	const theme = useTheme();
	const navigation = useNavigation();
	const route = useRoute();
	const { car } = route.params as Params;

	const scrollY = useSharedValue(0);
	const scrollHandler = useAnimatedScrollHandler((event) => {
		scrollY.value = event.contentOffset.y;
	});

	const headerStyleAnimation = useAnimatedStyle(() => {
		return {
			height: interpolate(
				scrollY.value,
				[0, 200],
				[230, 90],
				Extrapolate.CLAMP
			),
		};
	});

	const slideCarsStyleAnimation = useAnimatedStyle(() => {
		return {
			opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
		};
	});

	function handleCarRent() {
		navigation.navigate('Scheduling' as never, { car } as never);
	}

	return (
		<Container>
			<StatusBar style='auto' />
			<Header>
				<BackButtton
					onPress={() => navigation.goBack()}
					color={theme.colors.text}
				/>
			</Header>
			<Animated.View style={headerStyleAnimation}>
				<CarImages>
					<Animated.View style={slideCarsStyleAnimation}>
						<ImageSlider imagesUrl={car.photos} />
					</Animated.View>
				</CarImages>
			</Animated.View>

			<Animated.ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					padding: 24,
					alignItems: 'center',
				}}
				onScroll={scrollHandler}
				scrollEventThrottle={16}
			>
				<Details>
					<Description>
						<Brand>{car.brand}</Brand>
						<Model>{car.name}</Model>
					</Description>

					<Rent>
						<Period>{car.rent.period}</Period>
						<Price>{formatReal(Number(car.rent.price), false)}</Price>
					</Rent>
				</Details>
				<Accessories>
					{car.accessories.map((item) => (
						<Accessory
							key={item.type}
							name={item.name}
							icon={getAccessoryIcon(item.type)}
						/>
					))}
				</Accessories>

				<About>{car.about}</About>
			</Animated.ScrollView>

			<Footer>
				<Button onPress={handleCarRent} title='Escolher período do aluguel' />
			</Footer>
		</Container>
	);
}
