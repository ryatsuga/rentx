import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import {
	Container,
	ImageIndexes,
	ImageIndex,
	CarImageWrapper,
	CarImage,
} from './styles';

interface Props {
	imagesUrl: string[];
}

interface ChangeImageProps {
	viewableItems: ViewToken[];
	changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: Props) {
	const [imageIndex, setImageIndex] = useState(null);

	const indexChanged = useRef((info: ChangeImageProps) => {
		setImageIndex(info.viewableItems[0].index);
	});

	return (
		<Container>
			<ImageIndexes>
				{imagesUrl.map((_, index) => (
					<ImageIndex key={index} active={index === imageIndex} />
				))}
			</ImageIndexes>

			<FlatList
				keyExtractor={(key) => key}
				data={imagesUrl}
				renderItem={({ item }) => (
					<CarImageWrapper>
						<CarImage source={{ uri: item }} resizeMode='contain' />
					</CarImageWrapper>
				)}
				horizontal
				showsHorizontalScrollIndicator={false}
				onViewableItemsChanged={indexChanged.current}
			/>
		</Container>
	);
}
