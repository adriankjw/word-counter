import { WordCount } from "./WordCount";
import { SortBy, SortOrder } from "./Enums";

const MORE_THAN = 1;
const LESS_THAN = -1;

export function countWords(inputText: string) {
    let words = inputText.split(/\s*[\s,]\s*/)
    let counts = {};
    words.forEach(word => {
        if (/\S/.test(word)) { // Ignore word if it's only whitespace
            if (word in counts) {
                counts[word]++; // Increase counter for word
            } else {
                counts[word] = 1; // New word
            }
        }
    });

    // Convert to array so that it can be sorted
    let countArray = [];
    for (let key in counts) {
        let value = counts[key];
        let wordCount = {
            word: key,
            count: value
        };
        countArray.push(wordCount);
    }

    return countArray;
}

export function sortWords(countArray: WordCount[], sortBy: SortBy, sortOrder: SortOrder) {
    return countArray.sort((wordCount1, wordCount2) => {
        if (sortBy == SortBy.word) {
            return getOrder(sortOrder, wordCount1.word.localeCompare(wordCount2.word));
        } else if (sortBy == SortBy.count) {
            if (wordCount1.count > wordCount2.count) {
                return getOrder(sortOrder, MORE_THAN);
            } else if (wordCount1.count < wordCount2.count) {
                return getOrder(sortOrder, LESS_THAN);
            } else {
                // Sort alphabetically (ascending) if word count is the same for the two words
                return getOrder(SortOrder.asc, wordCount1.word.localeCompare(wordCount2.word));
            }
        }
    });
}

function getOrder(sortOrder: SortOrder, compareResult: number) {
    if (sortOrder == SortOrder.asc) {
        return compareResult;
    } else if (sortOrder == SortOrder.desc) {
        return compareResult * -1;
    } else {
        return compareResult;
    }
}