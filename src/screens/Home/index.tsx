import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useMemo, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import {
	Container,
	Header,
	TotalCars,
	CarList,
	MyCarsButton,
	MyCarsButtonWrapper,
} from './styles';
import { Ionicons } from '@expo/vector-icons';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { Alert, BackHandler } from 'react-native';
import { CarDTO } from '../../dtos/CarDTO';
import { Load } from '../../components/Load';
import { useTheme } from 'styled-components';
import { GestureHandler } from '../../styles/global';
import Animated, {
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue,
} from 'react-native-reanimated';
import { PanGestureHandler, RectButton } from 'react-native-gesture-handler';
import { LoadAnimation } from '../../components/LoadAnimation';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

export function Home() {
	const navigation = useNavigation();
	const [isLoading, setIsLoading] = useState(true);
	const [cars, setCars] = useState<CarDTO[]>([]);
	const theme = useTheme();

	const positionX = useSharedValue(0);
	const positionY = useSharedValue(0);

	const myCarsButtonStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{ translateX: positionX.value },
				{ translateY: positionY.value },
			],
		};
	});

	const onGestureEvent = useAnimatedGestureHandler({
		onStart(_, ctx: any) {
			ctx.positionX = positionX.value;
			ctx.positionY = positionY.value;
		},
		onActive(event, ctx) {
			positionX.value = ctx.positionX + event.translationX;
			positionY.value = ctx.positionY + event.translationY;
		},
		onEnd() {},
	});

	useEffect(() => {
		api
			.get('/cars')
			.then((res) => {
				setCars(res.data);
			})
			.catch((err) =>
				Alert.alert(
					'Erro de carregamento',
					'Ocorreu um erro ao carregar veículos, tente novamente mais tarde'
				)
			)
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	useEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', () => {
			return true;
		});
	});

	const totalCars = useMemo(() => {
		if (!!cars.length) {
			return `Total de ${cars.length} carros`;
		}
		return '';
	}, [cars]);

	function handleCarDetails(car: CarDTO) {
		navigation.navigate('CarDetails' as never, { car } as never);
	}

	function handleOpenMyCars() {
		navigation.navigate('MyCars' as never);
	}

	return (
		<Container>
			<StatusBar style='light' />
			<Header>
				<Logo width={RFValue(108)} height={RFValue(12)} />
				<TotalCars>{totalCars}</TotalCars>
			</Header>
			{isLoading ? (
				<LoadAnimation />
			) : (
				<CarList
					data={cars}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<Car onPress={() => handleCarDetails(item)} data={item} />
					)}
				/>
			)}
			<PanGestureHandler onGestureEvent={onGestureEvent}>
				<Animated.View
					style={[
						myCarsButtonStyle,
						{
							position: 'absolute',
							bottom: 13,
							right: 22,
						},
					]}
				>
					<ButtonAnimated
						onPress={handleOpenMyCars}
						style={{
							width: 60,
							height: 60,
							borderRadius: 30,
							backgroundColor: theme.colors.main,
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Ionicons
							size={24}
							name='ios-car-sport'
							color={theme.colors.shape}
						/>
					</ButtonAnimated>
				</Animated.View>
			</PanGestureHandler>
		</Container>
	);
}
