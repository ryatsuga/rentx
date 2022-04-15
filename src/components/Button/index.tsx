import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Title } from './styles';

interface Props extends RectButtonProps {
	title: string;
	color?: string;
	loading?: boolean;
	light?: boolean;
}

export function Button({
	title,
	color,
	enabled = true,
	loading = false,
	light = false,
	...rest
}: Props) {
	return (
		<Container color={color} {...rest} style={{ opacity: enabled ? 1 : 0.5 }}>
			{loading ? (
				<ActivityIndicator size='small' color={'#FFFFFF'} />
			) : (
				<Title light={light}>{title}</Title>
			)}
		</Container>
	);
}
