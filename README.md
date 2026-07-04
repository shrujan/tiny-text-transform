# Tiny Text Transform (tiny-text-transform)

A tiny, zero-dependency TypeScript/JavaScript library for common text case transformations.

## Features

-   Lightweight and dependency-free.
-   Fully typed with TypeScript.
-   Simple and predictable API.
-   Covers most common text casing needs (Title Case, Sentence Case, Kebab Case, etc.).

## Installation

Install the package using npm or yarn:

```bash
npm install tiny-text-transform
```

or

```bash
yarn add tiny-text-transform
```

## Usage

Import the functions you need and pass your text to them.

```javascript
import { makeTitleCase, makeKebabCase, makeSentenceCase } from 'tiny-text-transform';

const myString = "hello world. this is a test.";

// To Title Case
console.log(makeTitleCase(myString));
// => "Hello World. This Is A Test."

// To kebab-case
console.log(makeKebabCase(myString));
// => "hello-world.-this-is-a-test."

// To Sentence case
console.log(makeSentenceCase(myString));
// => "Hello world. This is a test."
```

## API Reference

All functions are pure and will return a new string. They gracefully handle `null`, `undefined`, or empty string inputs by returning an empty string.

---

### `makeFirstLetterUpper(text: string): string`

Capitalizes the first letter of a given string.

```javascript
makeFirstLetterUpper('hello world'); // => 'Hello world'
```

---

### `makeTitleCase(text: string): string`

Converts a string to Title Case by capitalizing the first letter of each word.

```javascript
makeTitleCase('my awesome library'); // => 'My Awesome Library'
```

---

### `makeSentenceCase(text: string): string`

Converts a string to Sentence Case. It capitalizes the first letter of the entire string and the first letter following sentence-terminating punctuation (`.`, `!`, `?`).

```javascript
makeSentenceCase('hello world. how are you?'); // => 'Hello world. How are you?'
```

---

### `makeAllUpperCase(text: string): string`

Converts the entire string to upper case.

```javascript
makeAllUpperCase('hello'); // => 'HELLO'
```

---

### `makeAllLowerCase(text: string): string`

Converts the entire string to lower case.

```javascript
makeAllLowerCase('WORLD'); // => 'world'
```

---

### `makeKebabCase(text: string): string` / `makeKebabLowerCase(text: string): string`

Converts a string to `kebab-case` (all lower case, words separated by hyphens).

```javascript
makeKebabCase('Convert This To Kebab'); // => 'convert-this-to-kebab'
```

---

### `makePascalCase(text: string): string`

Converts a string to `PascalCase` (words joined together, each word capitalized).

```javascript
makePascalCase('my app name'); // => 'MyAppName'
```

---

### `makeSnakeCase(text: string): string`

Converts a string to `snake_case` (all lower case, words separated by underscores).

```javascript
makeSnakeCase('my variable name'); // => 'my_variable_name'
```

## License

MIT