export const summarizeText = (string: string, limit: number) => {
	if (string.length <= limit) return string
	return string.substring(0, limit) + '...'
}
