import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Keyboard, Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { Footer, Container, Header, SubTitle, Title, Form } from './styles';

export function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const theme = useTheme();

	async function handleSignIn() {
		try {
			const scheme = Yup.object().shape({
				email: Yup.string()
					.required('E-mail obrigatório')
					.email('Digite um e-mail válido'),

				password: Yup.string().required('Senha obrigatória'),
			});

			await scheme.validate({ email, password });
			console.log('Tudo certo!');
		} catch (err) {
			if (err instanceof Yup.ValidationError) {
				Alert.alert('Opa', err.message);
			} else {
				Alert.alert(
					'Erro na autenticação',
					'Ocorreu um erro ao fazer login, verifique as credenciais'
				);
			}
			console.log('Algo deu errado!');
		}
	}

	return (
		<KeyboardAvoidingView behavior={'position'} enabled>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<Container>
					<StatusBar style='auto' />
					<Header>
						<Title>Estamos{'\n'}quase lá.</Title>
						<SubTitle>
							Faça seu login para começar{'\n'}
							uma experiência incrível.
						</SubTitle>
					</Header>
					<Form>
						<Input
							iconName={'mail'}
							keyboardType={'email-address'}
							autoCorrect={false}
							autoCapitalize={'none'}
							placeholder={'E-mail'}
							onChangeText={setEmail}
							value={email}
						/>

						<PasswordInput
							iconName={'lock'}
							placeholder={'Senha'}
							onChangeText={setPassword}
							value={password}
						/>
					</Form>
					<Footer>
						<Button title={'Login'} onPress={handleSignIn} />
						<Button
							title={'Criar conta gratuita'}
							color={theme.colors.background_secondary}
							onPress={() => {}}
							light={true}
						/>
					</Footer>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}
