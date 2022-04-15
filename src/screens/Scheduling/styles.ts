import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface DateValueProps {
	selected?: boolean;
}

export const Container = styled.View`
	flex: 1;
`;

export const Header = styled.View`
	width: 100%;
	height: 325px;

	justify-content: space-between;

	padding: 40px 24px;

	background-color: ${({ theme }) => theme.colors.header};
`;

export const Description = styled.Text`
	color: ${({ theme }) => theme.colors.background_secondary};
	font-family: ${({ theme }) => theme.fonts.secondary_600};

	font-size: ${RFValue(30)}px;
	line-height: ${RFValue(34)}px;
`;

export const Period = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
	font-family: ${({ theme }) => theme.fonts.secondary_500};
	font-size: ${RFValue(12)}px;
	color: ${({ theme }) => theme.colors.text};
`;

export const DateValue = styled.Text<DateValueProps>`
	font-family: ${({ theme }) => theme.fonts.primary_500};
	font-size: ${RFValue(15)}px;
	color: ${({ theme, selected }) =>
		selected ? theme.colors.shape : theme.colors.main_light};
	opacity: ${({ selected }) => (selected ? 1 : 0.24)};
`;

export const Content = styled.View`
	flex: 1;
`;

export const Footer = styled.View`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.background_primary};

	padding: 24px 24px;
`;
