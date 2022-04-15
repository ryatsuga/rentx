import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
	isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
	flex-direction: row;
	width: 100%;
	height: 60px;
	margin-bottom: 8px;
	align-items: center;

	${({ theme, isFocused }) =>
		isFocused &&
		css`
			border-bottom-width: 2px;
			border-bottom-color: ${theme.colors.main};
		`}
`;

export const IconWrapper = styled.View`
	width: 60px;
	height: 100%;

	justify-content: center;
	align-items: center;

	margin-right: 2px;
	background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const TextInput = styled.TextInput`
	flex: 1;
	height: 100%;
	padding: 10px 15px;
	background-color: ${({ theme }) => theme.colors.background_secondary};

	font-family: ${({ theme }) => theme.fonts.primary_400};
	font-size: ${RFValue(15)}px;
`;
