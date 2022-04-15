import { FlatList, FlatListProps } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { CarDTO } from '../../dtos/CarDTO';

export const Container = styled.View`
	flex: 1;

	background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Title = styled.Text`
	font-size: 30px;
	font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const Header = styled.View`
	width: 100%;
	height: 125px;

	background-color: ${({ theme }) => theme.colors.header};

	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;

	padding: 32px 24px;
`;

export const TotalCars = styled.Text`
	font-size: ${RFValue(15)}px;
	font-family: ${({ theme }) => theme.fonts.primary_400};

	color: ${({ theme }) => theme.colors.text};
`;

export const CarList = styled(
	FlatList as new (props: FlatListProps<CarDTO>) => FlatList<CarDTO>
).attrs({
	contentContainerStyle: {
		padding: 24,
	},
	showsVerticalScrollIndicator: false,
})``;

export const MyCarsButtonWrapper = styled.View`
	position: absolute;

	bottom: 13px;
	right: 22px;
`;

export const MyCarsButton = styled(RectButton)`
	width: 60px;
	height: 60px;

	background-color: ${({ theme }) => theme.colors.main};
	border-radius: 30px;

	justify-content: center;
	align-items: center;
`;
