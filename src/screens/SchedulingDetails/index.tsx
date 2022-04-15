import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Accessory } from '../../components/Accessory';
import { BackButtton } from '../../components/BackButtton';
import { ImageSlider } from '../../components/ImageSlider';
import {
	Container,
	Header,
	CarImages,
	Content,
	Details,
	Description,
	Brand,
	Model,
	Rent,
	Period,
	Price,
	Accessories,
	DateInfo,
	CalendarIcon,
	DateTitle,
	DateValue,
	Footer,
	RentalPeriod,
	RentalPrice,
	RentalPriceLabel,
	RentalPriceQuota,
	RentalPriceDetails,
	RentalPriceTotal,
} from './styles';
import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CarDTO } from '../../dtos/CarDTO';
import { formatReal } from '../../utils/formatReal';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { differenceInDays } from 'date-fns';
import api from '../../services/api';
import { MarkedDateProps } from '../../components/Calendar';
import { Alert } from 'react-native';

interface RentalPeriod {
	start: number;
	startFormatted: string;
	end: number;
	endFormatted: string;
}

interface Params {
	car: CarDTO;
	rentalPeriod: RentalPeriod;
	dates: MarkedDateProps;
}

export function SchedulingDetails() {
	const [isLoading, setIsLoading] = useState(false);
	const theme = useTheme();
	const navigation = useNavigation();

	const route = useRoute();
	const { car, rentalPeriod, dates } = route.params as Params;

	async function handleConfirmCarRent() {
		setIsLoading(true);
		const markedDates = Object.entries(dates).map((date) => date[0]);

		api
			.get(`/schedules_bycars/${car.id}`)
			.then((res) => {
				const unavailableDates = {
					...res.data.unavailable_dates,
				};
			})
			.then((res) => {})
			.catch((err) => {
				Alert.alert(
					'Erro buscar agendamentos',
					'Não foi possível buscar agendamentos realizados'
				);
			});

		Promise.all([
			api.post(`/schedules_byuser`, {
				id: car.id,
				user_id: 1,
				car,
				startDate: rentalPeriod.startFormatted,
				endDate: rentalPeriod.endFormatted,
			}),

			api.put(`/schedules_bycars/${car.id}`, {
				id: car.id,
				unavailable_dates: markedDates,
			}),
		])
			.then((res) => {
				navigation.navigate('SchedulingComplete' as never);
			})
			.catch((err) => {
				Alert.alert(
					'Erro ao agendar',
					'Não foi possível agendar o veículo, tente novamente mais tarde'
				);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}

	const rentalDays = differenceInDays(
		new Date(rentalPeriod.end),
		new Date(rentalPeriod.start)
	);
	const totalRentalPrice = Number(car.rent.price) * rentalDays;

	return (
		<Container>
			<StatusBar style='auto' />
			<Header>
				<BackButtton
					onPress={() => navigation.goBack()}
					color={theme.colors.text}
				/>
			</Header>
			<CarImages>
				<ImageSlider imagesUrl={car.photos} />
			</CarImages>

			<Content>
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

				<RentalPeriod>
					<CalendarIcon>
						<Feather name='calendar' size={24} color={theme.colors.shape} />
					</CalendarIcon>

					<DateInfo>
						<DateTitle>DE</DateTitle>
						<DateValue>{rentalPeriod.startFormatted}</DateValue>
					</DateInfo>
					<Feather
						name='chevron-right'
						size={24}
						color={theme.colors.text_details}
					/>
					<DateInfo>
						<DateTitle>DE</DateTitle>
						<DateValue>{rentalPeriod.endFormatted}</DateValue>
					</DateInfo>
				</RentalPeriod>

				<RentalPrice>
					<RentalPriceLabel>TOTAL</RentalPriceLabel>
					<RentalPriceDetails>
						<RentalPriceQuota>
							{formatReal(Number(car.rent.price), false)} x{rentalDays} diárias
						</RentalPriceQuota>
						<RentalPriceTotal>
							{formatReal(Number(totalRentalPrice), false)}
						</RentalPriceTotal>
					</RentalPriceDetails>
				</RentalPrice>
			</Content>
			<Footer>
				<Button
					enabled={!isLoading}
					loading={isLoading}
					onPress={handleConfirmCarRent}
					color={theme.colors.success}
					title='Alugar agora'
				/>
			</Footer>
		</Container>
	);
}
