import React from 'react';
import {
	Brand,
	Details,
	About,
	Model,
	Price,
	Container,
	Period,
	Rent,
	Type,
	CarImage,
} from './styles';
import { formatReal } from '../../utils/formatReal';
import { getFuelTypeIcon } from '../../utils/getFuelTypeIcon';

interface CarData {
	brand: string;
	name: string;
	fuel_type: string;
	rent: {
		period: string;
		price: number;
	};
	thumbnail: string;
}

interface Props {
	data: CarData;
	onPress: () => void;
}

export function Car({ data, ...rest }: Props) {
	const MotorIcon = getFuelTypeIcon(data.fuel_type);

	return (
		<Container {...rest}>
			<Details>
				<Brand>{data.brand}</Brand>
				<Model>{data.name}</Model>

				<About>
					<Rent>
						<Period>{data.rent.period}</Period>
						<Price>{formatReal(Number(data.rent.price), false)}</Price>
					</Rent>
					<Type>
						<MotorIcon width={15} height={15} />
					</Type>
				</About>
			</Details>
			<CarImage
				resizeMode='contain'
				source={{
					uri: data.thumbnail,
				}}
			/>
		</Container>
	);
}
