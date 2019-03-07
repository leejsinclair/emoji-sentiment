const fs = require('fs');
const csv = fs.readFileSync(`${__dirname}/emoji-sentiment.csv`, 'utf8').split('\n');

let dataUtf8Key = {};
let dataUnicodeKey = {};

csv.forEach(function (line, i) {
	let key;
	if (i !== 0) {
		items = line.split('\t');
		key = (items[0] || '').replace('0x', '\\u');
		if (key.length > 0) {
			dataUtf8Key[`${key}`] = items[5];
		}
		key = (items[0] || '').replace('0x', '');
		dataUnicodeKey[key] = items[5];
	}
});

function lookup(unicodeKey, utf8Key) {
	return dataUnicodeKey[unicodeKey] || dataUtf8Key[utf8Key];
}

module.exports = lookup;