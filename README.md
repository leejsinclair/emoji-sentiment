# emoji-sentiment


## Installation
```
npm install emoji-extract-sentiment --save
```

## Usage
```
require ('emoji-extract-sentiment');

const text = "😭 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate sem non vulputate varius.";
const result = emojiSentiment(text);
```

## Expected result
```
[ { emoji: '😭',
    code: ':sob:',
    utf16: '\\uD83D\\uDE2D',
    unicode: '1f62d',
    sentiment: -0.093 } ]
```