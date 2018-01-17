export function getRevenue(price, quantity) {
	const priceFloat = parseFloat(price) || 0,
		quantityInt = parseInt(quantity, 10) || 0
	return priceFloat * quantityInt
}
