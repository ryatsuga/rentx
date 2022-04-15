import React from 'react';
import { Container } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

interface Props extends BorderlessButtonProps {
	color: string;
}

export function BackButtton({ color, ...rest }: Props) {
	const theme = useTheme();

	return (
		<Container {...rest}>
			<MaterialIcons
				size={24}
				color={color ? color : theme.colors.text}
				name='chevron-left'
			/>
		</Container>
	);
}
