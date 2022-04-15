import { ScrollView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

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

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.background_secondary};
	font-family: ${({ theme }) => theme.fonts.secondary_600};

	font-size: ${RFValue(30)}px;
	line-height: ${RFValue(34)}px;
`;

export const Description = styled.Text`
	color: ${({ theme }) => theme.colors.background_secondary};
	font-family: ${({ theme }) => theme.fonts.secondary_400};

	font-size: ${RFValue(15)}px;
`;

export const Content = styled(ScrollView).attrs({
	contentContainerStyle: {
		padding: 24,
		alignItems: 'center',
	},
	showsVerticalScrollIndicator: false,
})``;

export const ScheduleResume = styled.View`
	width: 100%;

	flex-direction: row;
	justify-content: space-between;

	margin-bottom: 16px;
`;

export const ScheduleLabel = styled.Text`
	color: ${({ theme }) => theme.colors.text};
	font-family: ${({ theme }) => theme.fonts.primary_400};

	font-size: ${RFValue(15)}px;
`;

export const ScheduleQuantity = styled.Text`
	color: ${({ theme }) => theme.colors.title};
	font-family: ${({ theme }) => theme.fonts.secondary_500};

	font-size: ${RFValue(15)}px;
`;

export const Schedules = styled.View`
	width: 100%;
`;

export const CarWrapper = styled.View`
	width: 100%;
`;

export const CarFooter = styled.View`
	width: 100%;
	flex-direction: row;
	background-color: ${({ theme }) => theme.colors.background_secondary};

	justify-content: space-between;
	align-items: center;

	margin-top: -10px;
	margin-bottom: 16px;

	padding: 14px 24px;
`;

export const CarFooterTitle = styled.Text`
	color: ${({ theme }) => theme.colors.text_details};
	font-family: ${({ theme }) => theme.fonts.secondary_500};

	font-size: ${RFValue(11)}px;
`;

export const CarFooterPeriod = styled.View`
	flex-direction: row;
`;

export const CarFooterDate = styled.Text`
	color: ${({ theme }) => theme.colors.title};
	font-family: ${({ theme }) => theme.fonts.primary_400};

	font-size: ${RFValue(13)}px;
`;
