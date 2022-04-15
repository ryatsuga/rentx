import GasolineSvg from '../assets/gasoline.svg';
import EnergySvg from '../assets/energy.svg';
import HybridSvg from '../assets/hybrid.svg';
import CarSvg from '../assets/car.svg';

export function getFuelTypeIcon(type: string) {
	switch (type) {
		case 'gasoline_motor':
			return GasolineSvg;
		case 'electric_motor':
			return EnergySvg;
		// case 'electric':
		// 	return EnergySvg;
		case 'hybrid_motor':
			return HybridSvg;
		default:
			return CarSvg;
	}
}
