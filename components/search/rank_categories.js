import { CATEGORIES } from "@/data/categories";
import categories_json from "../../data/categories_keywords.json";
import P from "../typography/P";

export default function rankSearchResult(text) {
  try {
    // Rank the search results to find the most relevant
    let clean_text = text.trim().toLowerCase();
    // do some pre checks
    if (clean_text === "") {
      return null;
    }
    let categories_ranks = arrayToDictionary(CATEGORIES);

    // calculate all the ranks of the categories
    for (const [category, rank] of Object.entries(categories_ranks)) {
      let keywords = categories_json[category].map((keyword) =>
        keyword.toLowerCase()
      );
      // modify the rank
      let newRank = calcCategoryRank(keywords, clean_text);
      categories_ranks[category] = newRank;
    }

    // return only the top 5
    return getTopCategories(categories_ranks);
  } catch {
    return null; // If something went wrong, return null
  }
}

export function calcCategoryRank(keywords, text) {
  let score = 0;
  for (let i = 0; i < keywords.length; i++) {
    let current_keyword = keywords[i];
    if (text.includes(current_keyword)) {
      score++;
    }
  }
  return score;
}

function getTopCategories(dictionary) {
  // Convert the dictionary to an array of [key, value] pairs
  const entries = Object.entries(dictionary);

  // Sort the array based on the values in descending order
  entries.sort((a, b) => b[1] - a[1]);
  const topCategories = entries
    .slice(0, 5)
    .filter((obj) => obj[1] > 0)
    .map((obj) => capitalizeEveryWord(obj[0]));

  if (topCategories.length == 0) return null;
  return topCategories;
}

function arrayToDictionary(array) {
  const dictionary = {};

  for (const item of array) {
    dictionary[item] = 0;
  }

  return dictionary;
}

function capitalizeEveryWord(str) {
  const words = str.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
}
