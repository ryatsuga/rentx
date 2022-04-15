import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
	padding: 0 24px;

	background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
	width: 100%;
	margin-top: 155px;
`;

export const Title = styled.Text`
	font-size: ${RFValue(40)}px;
	font-family: ${({ theme }) => theme.fonts.secondary_600};
	color: ${({ theme }) => theme.colors.title};
`;

export const SubTitle = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_400};
	color: ${({ theme }) => theme.colors.text};
	font-size: ${RFValue(15)}px;
	line-height: ${RFValue(25)}px;

	margin-top: 16px;
	margin-bottom: 50px;
`;

export const Form = styled.View`
	width: 100%;
`;

export const Footer = styled.View`
	width: 100%;
	margin-top: 65px;
`;
