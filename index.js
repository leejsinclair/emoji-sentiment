const emojiLookup = require('./data/emojis.js');
const emojiUnicode = require("emoji-unicode");
const toUTF16 = require('./lib/uft8.js');

const emojiRegex = require('emoji-regex');
var emojiLib = require('node-emoji');
var onlyEmoji = require('emoji-aware').onlyEmoji;
const regex = emojiRegex();

function processSentence(text) {
    const emojis = onlyEmoji(text) || [];

    return (emojis || []).map((emoji) => {
        const code = emojiLib.unemojify(emoji); // replaces the actual emoji with :emoji:, in this case: returns "I :heart: :pizza:"
        const num = emoji.codePointAt(0);
        const unicode = emojiUnicode(emoji);
        const utf16 = toUTF16(num);

        const score = emojiLookup(unicode, utf16);
        const sentiment = (score && score.length > 0) ? parseFloat(score) : 0;

        return {
            emoji,
            code,
            utf16,
            unicode,
            sentiment
        };
    });
}

module.exports = processSentence;