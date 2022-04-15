import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
	width: 100%;
	height: ${RFValue(126)}px;
	padding: 17px 24px;
	margin-bottom: 16px;

	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Details = styled.View``;

export const About = styled.View`
	margin-top: 16px;

	flex-direction: row;
	align-items: center;
`;

export const Rent = styled.View`
	margin-right: ${RFValue(25)}px;
`;

export const Type = styled.View`
	margin-top: 5px;
`;

export const Period = styled.Text`
	font-size: ${RFValue(11)}px;
	font-family: ${({ theme }) => theme.fonts.primary_500};
	color: ${({ theme }) => theme.colors.text_details};

	text-transform: uppercase;
`;

export const Brand = styled.Text`
	font-size: ${RFValue(11)}px;
	font-family: ${({ theme }) => theme.fonts.primary_500};
	color: ${({ theme }) => theme.colors.text_details};

	text-transform: uppercase;
`;

export const Model = styled.Text`
	font-size: ${RFValue(15)}px;
	font-family: ${({ theme }) => theme.fonts.primary_500};
	color: ${({ theme }) => theme.colors.title};
`;

export const Price = styled.Text`
	font-size: ${RFValue(15)}px;
	font-family: ${({ theme }) => theme.fonts.primary_500};
	color: ${({ theme }) => theme.colors.main};
`;

export const CarImage = styled.Image`
	width: ${RFValue(170)}px;
	height: ${RFValue(90)}px;
`;
