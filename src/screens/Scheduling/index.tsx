import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { BackButtton } from '../../components/BackButtton';
import ArrowSvg from '../../assets/arrow.svg';
import {
	Container,
	Header,
	Description,
	Period,
	DateInfo,
	DateValue,
	DateTitle,
	Content,
	Footer,
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { Button } from '../../components/Button';
import {
	Calendar,
	generateInterval,
	MarkedDateProps,
} from '../../components/Calendar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DateData } from 'react-native-calendars';
import { format, addDays } from 'date-fns';
import { CarDTO } from '../../dtos/CarDTO';
import { Alert } from 'react-native';

interface RentalPeriod {
	start: number;
	startFormatted: string;
	end: number;
	endFormatted: string;
}

interface Params {
	car: CarDTO;
}

export function Scheduling() {
	const [lastSelectedData, setLasSelectedData] = useState<DateData>(
		{} as DateData
	);
	const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
		{} as MarkedDateProps
	);
	const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
		{} as RentalPeriod
	);
	const theme = useTheme();
	const navigation = useNavigation();

	const route = useRoute();

	const { car } = route.params as Params;

	function handleConfirmRentalPeriod() {
		if (!rentalPeriod.start || !rentalPeriod.end) {
			Alert.alert(
				'Intervalo não selecionado',
				'Selecione um intervalo para alugar'
			);
		} else {
			navigation.navigate(
				'SchedulingDetails' as never,
				{ car, rentalPeriod, dates: markedDates } as never
			);
		}
	}

	function handleChangeDate(date: DateData) {
		let start = !lastSelectedData.timestamp ? date : lastSelectedData;
		let end = date;

		if (start.timestamp > end.timestamp) {
			start = end;
			end = start;
		}
		setLasSelectedData(end);

		const interval = generateInterval(start, end);
		setMarkedDates(interval);

		const firstDate = new Date(Object.keys(interval)[0]);
		const lastDate = new Date(
			Object.keys(interval)[Object.keys(interval).length - 1]
		);
		setRentalPeriod({
			start: start.timestamp,
			end: end.timestamp,
			startFormatted: format(addDays(firstDate, 1), 'dd/MM/yyyy'),
			endFormatted: format(addDays(lastDate, 1), 'dd/MM/yyyy'),
		});
	}

	return (
		<Container>
			<Header>
				<BackButtton
					onPress={() => navigation.goBack()}
					color={theme.colors.shape}
				/>
				<Description>
					Escolha uma{'\n'}data de início e{'\n'}fim do aluguel
				</Description>
				<Period>
					<DateInfo>
						<DateTitle>DE</DateTitle>
						<DateValue selected={!!rentalPeriod.start}>
							{rentalPeriod.start
								? rentalPeriod.startFormatted
								: '_______________'}
						</DateValue>
					</DateInfo>
					<ArrowSvg width={RFValue(48)} height={RFValue(10)} />
					<DateInfo>
						<DateTitle>ATÉ</DateTitle>
						<DateValue selected={!!rentalPeriod.end}>
							{rentalPeriod.end ? rentalPeriod.endFormatted : '_______________'}
						</DateValue>
					</DateInfo>
				</Period>
			</Header>
			<Content>
				<Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
			</Content>
			<Footer>
				<Button
					enabled={!!rentalPeriod.start}
					onPress={handleConfirmRentalPeriod}
					title='Confirmar'
				/>
			</Footer>
		</Container>
	);
}
function addDay(addDay: any, arg1: Date, arg2: string): string {
	throw new Error('Function not implemented.');
}
