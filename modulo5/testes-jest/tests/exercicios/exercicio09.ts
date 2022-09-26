export const formatarData = (date: string): string => {
	const dateFormated = date.split("/").reverse().join("/");
	return dateFormated;
};
