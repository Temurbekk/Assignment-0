function isPalindrome(word) {
  let start = 0;
  let end = word.length - 1;

  while (start <= end) {
    if (word[start] !== word[end]) return false;
    start++;
    end--;
  }

  return true;
}

// Do not edit this line;
module.exports = isPalindrome;
