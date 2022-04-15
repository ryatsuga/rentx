import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Container, IconWrapper, TextInput } from './styles';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
	iconName: React.ComponentProps<typeof Feather>['name'];
	value?: string;
}

export function Input({ iconName, value, ...rest }: InputProps) {
	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);
	const theme = useTheme();

	function handleInputFocus() {
		setIsFocused(true);
	}

	function handleInputBlur() {
		setIsFocused(false);
		setIsFilled(!!value);
	}

	return (
		<Container isFocused={isFocused}>
			<IconWrapper>
				<Feather
					name={iconName}
					size={24}
					color={
						isFocused || isFilled
							? theme.colors.main
							: theme.colors.text_details
					}
				/>
			</IconWrapper>
			<TextInput
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
				{...rest}
			/>
		</Container>
	);
}
