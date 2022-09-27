export const calcMedia = (list: number[]): number => {
	let totalSum = 0;

	for (let n of list) {
		totalSum += n;
	}

	const average = Math.ceil(totalSum / list.length);

	return average;
};
