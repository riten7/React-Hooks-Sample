export const getUniqueList = (list, filterBy) => {
	const unique = list
		.map(e => e[filterBy])
		.map((e, i, final) => final.indexOf(e) === i && i)
		.filter(e => list[e]).map(e => list[e]);
	return unique;
}