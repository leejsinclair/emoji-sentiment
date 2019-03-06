const emojiSentiment = require('./index.js');

const text = "When trying to tie your shoes is the hardest part of going for a walk! #coco❤️shoes #toomanyhotcrossbuns!";

let data = emojiSentiment(text);

console.log(data);