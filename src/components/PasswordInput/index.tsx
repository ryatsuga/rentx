import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import {
	ChangePasswordVisibilyButton,
	Container,
	IconWrapper,
	TextInput,
} from './styles';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
	iconName: React.ComponentProps<typeof Feather>['name'];
	value?: string;
}

export function PasswordInput({ iconName, value, ...rest }: InputProps) {
	const [visible, setVisibility] = useState(false);
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

	function togglePasswordVisibility() {
		setVisibility(!visible);
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
				onBlur={handleInputBlur}
				onFocus={handleInputFocus}
				secureTextEntry={!visible}
				{...rest}
			/>
			<ChangePasswordVisibilyButton onPress={togglePasswordVisibility}>
				<Feather
					name={visible ? 'eye-off' : 'eye'}
					size={22}
					color={theme.colors.text_details}
				/>
			</ChangePasswordVisibilyButton>
		</Container>
	);
}
