var assert = require('assert');
const emojiSentiment = require('../index.js');

const tests = [
    {
        sentence: "When trying to tie your shoes is the hardest part of going for a walk! #coco❤️shoes #toomanyhotcrossbuns!", sentiment: 0.746, number: 1
    },
    {
        sentence: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate sem non vulputate varius.", sentiment: 0, number: 0
    },
    {
        sentence: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 😍 Aenean vulputate 😷 sem non vulputate varius.", sentiment: 0.678, number: 2
    }
];

describe('Basic Mocha String Test', function () {
    tests.forEach((t) => {
        it(t.sentence, function () {
            const text = t.sentence;
            const result = emojiSentiment(text);
            assert.equal(result.length, t.number);
            if (result.length > 0) {
                assert.equal(result[0].sentiment, t.sentiment);
            }
        });
    })
});