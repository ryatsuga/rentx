export function formatReal(value: number, decimal: boolean = true) {
	return (
		'R$ ' +
		value
			.toFixed(decimal ? 2 : 0)
			.replace('.', ',')
			.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
	);
}
