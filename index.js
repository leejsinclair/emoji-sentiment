const emojiLookup = require('./data/emojis.js');
const toUTF16 = require('./lib/uft8.js');

const emojiRegex = require('emoji-regex');
var emojiLib = require('node-emoji');
const regex = emojiRegex();

function processSentence(text) {
    return regex.exec(text).map((match) => {
        const emoji = match[0];
        const code = emojiLib.unemojify(`${emoji}`) // replaces the actual emoji with :emoji:, in this case: returns "I :heart: :pizza:"
        const num = `${emoji}`.codePointAt(0);
        const utf16 = toUTF16(num);

        const sentiment = emojiLookup(utf16);

        return {
            emoji,
            code,
            utf16,
            sentiment
        };
    });
}

module.exports = processSentence;