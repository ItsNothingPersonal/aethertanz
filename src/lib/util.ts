export function titleCaseWord(word: string): string {
	if (!word) return word;
	return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
