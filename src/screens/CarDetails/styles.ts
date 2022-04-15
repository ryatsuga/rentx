import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;

	background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
	width: 100%;
	height: 125px;
	background-color: ${({ theme }) => theme.colors.background_secondary};

	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;

	padding: 40px 24px;

	position: absolute;
`;

export const CarImages = styled.View`
	margin-top: 80px;
`;

// export const Content = styled.ScrollView.attrs({
// 	contentContainerStyle: {
// 		padding: 24,
// 		alignItems: 'center',
// 	},
// 	showsVerticalScrollIndicator: false,
// })`
// 	background-color: ${({ theme }) => theme.colors.background_secondary};
// `;

export const Details = styled.View`
	width: 100%;

	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
	font-family: ${({ theme }) => theme.fonts.secondary_500};
	color: ${({ theme }) => theme.colors.text_details};
	font-size: ${RFValue(12)}px;
	text-transform: uppercase;
`;

export const Model = styled.Text`
	font-family: ${({ theme }) => theme.fonts.secondary_500};
	color: ${({ theme }) => theme.colors.title};
	font-size: ${RFValue(22)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
	font-family: ${({ theme }) => theme.fonts.secondary_500};
	color: ${({ theme }) => theme.colors.text_details};
	font-size: ${RFValue(12)}px;
	text-transform: uppercase;
`;

export const Price = styled.Text`
	font-family: ${({ theme }) => theme.fonts.secondary_500};
	color: ${({ theme }) => theme.colors.main};
	font-size: ${RFValue(22)}px;
`;

export const About = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_400};
	color: ${({ theme }) => theme.colors.text};
	font-size: ${RFValue(15)}px;
	text-align: justify;
	line-height: ${RFValue(25)}px;

	margin-top: 23px;
`;

export const Accessories = styled.View`
	width: 100%;

	flex-direction: row;
	flex-wrap: wrap;

	align-items: center;
	justify-content: space-between;

	margin-top: 16px;
`;

export const Footer = styled.View`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.background_primary};

	padding: 24px 24px;
`;
