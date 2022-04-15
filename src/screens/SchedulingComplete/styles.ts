import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	padding-top: 76px;

	background-color: ${({ theme }) => theme.colors.header};
`;

export const Content = styled.View`
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.secondary_600};
	color: ${({ theme }) => theme.colors.background_secondary};
	font-size: ${RFValue(30)}px;

	margin-top: 40px;
`;

export const Message = styled.Text`
	font-family: ${({ theme }) => theme.fonts.primary_400};
	color: ${({ theme }) => theme.colors.text_details};
	font-size: ${RFValue(15)}px;

	text-align: center;

	margin-top: 16px;
	margin-bottom: 50px;
`;
