import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButtton } from '../../components/BackButtton';
import { AntDesign } from '@expo/vector-icons';

import { Car } from '../../components/Car';
import { Load } from '../../components/Load';
import { CarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';
import {
	Container,
	Description,
	Header,
	Title,
	Content,
	ScheduleResume,
	ScheduleLabel,
	ScheduleQuantity,
	Schedules,
	CarWrapper,
	CarFooter,
	CarFooterTitle,
	CarFooterPeriod,
	CarFooterDate,
} from './styles';
import { LoadAnimation } from '../../components/LoadAnimation';

interface CarProps {
	id: string;
	user_id: string;
	car: CarDTO;
	startDate: string;
	endDate: string;
}

export function MyCars() {
	const [isLoading, setIsLoading] = useState(true);
	const [mySchedules, setMySchedules] = useState<CarProps[]>([]);
	const navigation = useNavigation();
	const theme = useTheme();

	useEffect(() => {
		const abortController = new AbortController();
		api
			.get(`/schedules_byuser?user_id=1`)
			.then((res) => {
				setMySchedules(res.data);
			})
			.catch((err) => {
				Alert.alert(
					'Erro ao carregar agendamentos',
					'Ocorreu um erro ao carregar agendamentos, tente novamente mais tarde'
				);
			})
			.finally(() => {
				setIsLoading(false);
			});
		return () => {
			abortController.abort();
		};
	}, []);

	const totalSchedules = useMemo(() => {
		if (!!mySchedules.length) {
			if (mySchedules.length < 10) {
				return `0${mySchedules.length}`;
			}
			return `${mySchedules.length}`;
		}
		return '00';
	}, [mySchedules]);

	return (
		<Container>
			<Header>
				<BackButtton
					onPress={() => navigation.goBack()}
					color={theme.colors.shape}
				/>
				<Title>
					Seus agendamentos,{'\n'}
					estão aqui.
				</Title>
				<Description>Conforto, segurança e praticidade.</Description>
			</Header>
			{isLoading ? (
				<LoadAnimation />
			) : (
				<Content>
					<ScheduleResume>
						<ScheduleLabel>Agendamentos feitos</ScheduleLabel>
						<ScheduleQuantity>{totalSchedules}</ScheduleQuantity>
					</ScheduleResume>
					<Schedules>
						{mySchedules.map((schedule) => (
							<CarWrapper key={schedule.id}>
								<Car onPress={() => {}} data={schedule.car} />
								<CarFooter>
									<CarFooterTitle>PERÍODO</CarFooterTitle>
									<CarFooterPeriod>
										<CarFooterDate>{schedule.startDate}</CarFooterDate>
										<AntDesign
											style={{ marginHorizontal: 6 }}
											size={18}
											name='arrowright'
											color={theme.colors.text_details}
										/>
										<CarFooterDate>{schedule.endDate}</CarFooterDate>
									</CarFooterPeriod>
								</CarFooter>
							</CarWrapper>
						))}
					</Schedules>
				</Content>
			)}
		</Container>
	);
}
