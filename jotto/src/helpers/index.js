
/**
 * @method getLetterMAtchCount
 * @param {string} guessedWord - Guessed word.
 * @param {string} secretWord  - Secret word.
 * @returns {number} - Number of letters matched between guessed word.
 */
export const getLetterMatchCount = (guessedWord, secretWord) => {
    const secretLetterSet = new Set(secretWord.split(''));
    const guessedLetterSet = new Set(guessedWord.split(''));
    return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;

}