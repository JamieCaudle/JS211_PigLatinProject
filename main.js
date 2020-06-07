"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const words = [
  "car",
  "dog",
  "create",
  "valley",
  "egg",
  "emission",
  "hello",
  "rocket",
];
const vowels = ["a", "e", "i", "o", "u"];

const pigLatin = (word) => {
  counter = 0;
  if (words.includes(vowels)) {
    counter++;

    return word + "yay";
  }
};

pigLatin(car);

// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question("word ", (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
};

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === "function") {
  describe("#pigLatin()", () => {
    it("should translate a simple word", () => {
      assert.equal(pigLatin("car"), "arcay");
      assert.equal(pigLatin("dog"), "ogday");
    });
    it("should translate a complex word", () => {
      assert.equal(pigLatin("create"), "eatecray");
      assert.equal(pigLatin("valley"), "alleyvay");
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin("egg"), "eggyay");
      assert.equal(pigLatin("emission"), "emissionyay");
    });
    it("should lowercase and trim word before translation", () => {
      assert.equal(pigLatin("HeLlO "), "ellohay");
      assert.equal(pigLatin(" RoCkEt"), "ocketray");
    });
  });
} else {
  getPrompt();
}

// 1. if word begins with a vowel send to one function: adds "yay"

// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.

// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
