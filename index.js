function isPalindrome(word) {
  // Write your algorithm here
  // iterate from beginning to the middle
  // racecar 7/2 === 3.5
  // aaaaaa 6/2 === 3
  for (let i = 0; i < word.length / 2; i++){
  //check each letter to the corresponding letter from the end
    const j = word.length - 1 - i
    const startChar = word[i]
    const endChar = word[j]
    // if any letters dont match, return false
    if (startChar !== endChar) return false;
  }
  return true;
}

/* 
  Add your pseudocode here
  iterate from the beginning to the middle 
    check each character to the corresponding letter from the end 
      if any letters dont match, return false

  return true
*/

/*
  Add written explanation of your solution here
  if we make a function that returns true if a word is a palindrome. that means if the 1st letter is the same as the last letter
  and the 2nd letter is the same as the 2nd to last letter, etc. until we reach the middle, return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
