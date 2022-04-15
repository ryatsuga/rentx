import React from 'react';
import { Container, Content, Title, Message } from './styles';
import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { useWindowDimensions } from 'react-native';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export function SchedulingComplete() {
	const { width } = useWindowDimensions();
	const theme = useTheme();
	const navigation = useNavigation();

	return (
		<Container>
			<StatusBar style='light' />
			<LogoSvg width={width} />

			<Content>
				<DoneSvg style={{ marginTop: -20 }} width={80} height={80} />
				<Title>Carro alugado!</Title>

				<Message>
					Agora você só precisa ir{'\n'}
					até a concessionária da RENTX{'\n'}
					pegar o seu automóvel.
				</Message>

				<Button
					onPress={() => {
						navigation.navigate('Home' as never);
					}}
					color={theme.colors.shape_dark}
					title={'   Ok   '}
				/>
			</Content>
		</Container>
	);
}
