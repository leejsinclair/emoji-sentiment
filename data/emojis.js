const fs = require('fs');
const csv = fs.readFileSync(`${__dirname}/emoji-sentiment.csv`, 'utf8').split('\n');

let data = {};

csv.forEach(function (line, i) {
	if (i !== 0) {
		items = line.split('\t');
		const key = (items[0] || '').replace('0x', '\\u');
		if (key.length > 0) {
			data[`${key}`] = items[5];
		}
	}
});

function lookup(code) {
	return data[code];
}

module.exports = lookup;