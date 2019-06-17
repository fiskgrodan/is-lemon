# isLemon 🍋
isLemon is a library for testing if a value is lemon 🍋.

## Install

```
$ npm install --save is-lemon
```

## Usage

```js
const isLemon = require("is-lemon");

isLemon("lemon"); // true
isLemon("LEMON"); // true
isLemon("🍋"); // true

isLemon(0); // false
isLemon(null); // false
isLemon("orange"); // false
```

## API

### isLemon(value)
Type: `Function`

Returns: `Boolean`

#### value
Type: `Any`

## License

ISC © [fiskgrodan](https://github.com/fiskgrodan)
