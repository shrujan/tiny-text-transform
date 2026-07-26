# Tiny Text Transform (`tiny-text-transform`)

A tiny, zero-dependency TypeScript/JavaScript library for common text transformations.

## Features

- 🚀 Lightweight and dependency-free.
- 📦 Fully typed with TypeScript.
- 🔒 Pure functions with no side effects.
- ✨ Simple and predictable API.
- 🔤 Supports common text transformations including:
  - Title Case
  - Sentence Case
  - UPPERCASE
  - lowercase
  - kebab-case
  - PascalCase
  - snake_case
  - Alphanumeric filtering
  - Text reversal
  - Single Spaced Sentences
  - Remove Emoji ✅
  - Detect Emoji ✅

## Installation

Using npm:

```bash
npm install tiny-text-transform
```

Using Yarn:

```bash
yarn add tiny-text-transform
```

## Usage

Import only the functions you need.

```typescript
import {
  makeFirstLetterUpper,
  makeTitleCase,
  makeSentenceCase,
  makeAllUpperCase,
  makeAllLowerCase,
  makeKebabCase,
  makeKebabLowerCase,
  makePascalCase,
  makeSnakeCase,
  makeTextEmojiFree,
  checkEmoji
} from 'tiny-text-transform';

const text = 'hello world. this is a test.';
const mixedText = 'Hello World. this is a TEST.';
const textWithEmoji = "Hi there, ✅ (This is a text with a lot of Emojis ✅ to demo ✅)";

console.log(makeTitleCase(text));
// => "Hello World. This Is A Test."

console.log(makeFirstLetterUpper(text));
// => "Hello world. this is a test."

console.log(makeSentenceCase(text));
// => "Hello world. This is a test."

console.log(makeAllUpperCase(text));
// => "HELLO WORLD. THIS IS A TEST."

console.log(makeAllLowerCase(mixedText));
// => "hello world. this is a test."

console.log(makeKebabCase(text));
// => "hello-world-this-is-a-test"

console.log(makeKebabLowerCase(mixedText));
// => "hello-world-this-is-a-test"

console.log(makePascalCase(text));
// => "HelloWorldThisIsATest"

console.log(makeSnakeCase(text));
// => "hello_world_this_is_a_test"

console.log(makeTextEmojiFree(textWithEmoji));
// => "Hi there, (This is a text with a lot of Emojis to demo)"

// ------------ Validation Methods ----------------

console.log(checkEmoji(textWithEmoji));
// => true

```

---

# API Reference

All functions are pure and return a new string for valid string inputs.

If the input is `null`, `undefined`, or an empty string, the original value is returned unchanged.

---

## `makeFirstLetterUpper(text: string): string`

Capitalizes only the first letter of a string.

```typescript
makeFirstLetterUpper('hello world');
// => "Hello world"
```

---

## `makeTitleCase(text: string): string`

Capitalizes the first letter of every word.

```typescript
makeTitleCase('my awesome library');
// => "My Awesome Library"
```

---

## `makeSentenceCase(text: string): string`

Capitalizes the first letter of each sentence separated by `. `.

```typescript
makeSentenceCase('hello world. this is a test.');
// => "Hello world. This is a test."
```

---

## `makeAllUpperCase(text: string): string`

Converts every character to uppercase.

```typescript
makeAllUpperCase('hello world');
// => "HELLO WORLD"
```

---

## `makeAllLowerCase(text: string): string`

Converts every character to lowercase.

```typescript
makeAllLowerCase('HELLO WORLD');
// => "hello world"
```

---

## `makeSingleSpaced(text: string): string`

Removes leading and trailing whitespace and replaces multiple consecutive whitespace characters with a single space.

```typescript
makeSingleSpaced('  hello     world   ');
// => "hello world"
```

---

## `makeKebabCase(text: string): string`

Removes special characters, replaces spaces with hyphens (`-`), and preserves the original letter casing.

```typescript
makeKebabCase('Hello World! Welcome.');
// => "Hello-World-Welcome"
```

---

## `makeKebabLowerCase(text: string): string`

Removes special characters, converts all letters to lowercase, and replaces spaces with hyphens (`-`).

```typescript
makeKebabLowerCase('Hello World! Welcome.');
// => "hello-world-welcome"
```

---

## `makePascalCase(text: string): string`

Removes special characters and converts the text to `PascalCase`.

```typescript
makePascalCase('my awesome library');
// => "MyAwesomeLibrary"
```

---

## `makeSnakeCase(text: string): string`

Removes special characters, replaces spaces with underscores (`_`), and preserves the original letter casing.

```typescript
makeSnakeCase('My Variable Name');
// => "My_Variable_Name"
```

---

## `makeAlphanumeric(text: string): string`

Removes all non-alphanumeric characters while preserving spaces.

```typescript
makeAlphanumeric('hello!@#$ world 123');
// => "hello world 123"
```

---

## `makeTextReversed(text: string): string`

Reverses the characters in the string.

```typescript
makeTextReversed('hello world');
// => "dlrow olleh"
```

---

## `makeTextEmojiFree(text: string): string`

Removes all emojis and returns a clean string.

```typescript
makeTextEmojiFree('Hi there, ✅ (This is a text with a lot of Emojis ✅ to demo✅)');
// => "Hi there, (This is a text with a lot of Emojis to demo)"
```

---
# Validation Functions
## `checkEmoji(text: string): boolean`

Detects if the string has an emoji and returns a boolean value.

```typescript
checkEmoji('Hi there, ✅ (This is a text with a lot of Emojis ✅ to demo✅)');
// => true
```

---



# Examples

| Input | Function | Output |
|--------|----------|--------|
| `hello world` | `makeFirstLetterUpper` | `Hello world` |
| `hello world` | `makeTitleCase` | `Hello World` |
| `hello world. this is a test.` | `makeSentenceCase` | `Hello world. This is a test.` |
| `hello world` | `makeAllUpperCase` | `HELLO WORLD` |
| `HELLO WORLD` | `makeAllLowerCase` | `hello world` |
| `  hello    world  ` | `makeSingleSpaced` | `hello world` |
| `Hello World!` | `makeKebabCase` | `Hello-World` |
| `Hello World!` | `makeKebabLowerCase` | `hello-world` |
| `my awesome library` | `makePascalCase` | `MyAwesomeLibrary` |
| `My Variable Name` | `makeSnakeCase` | `My_Variable_Name` |
| `hello!@#$ world 123` | `makeAlphanumeric` | `hello world 123` |
| `hello world` | `makeTextReversed` | `dlrow olleh` |
| `Hi there, ✅ (This is a text with a lot of Emojis ✅ to demo✅)` | `makeTextEmojiFree` | `Hi there, (This is a text with a lot of Emojis to demo)` |
| `Hi there, ✅ (This is a text with a lot of Emojis ✅ to demo✅)` | `checkEmoji` | `true` |

---

# Contributing

Issues and pull requests are welcome!

If you find a bug or have an idea for a new text transformation, feel free to open an issue or submit a pull request.

---

# License

MIT License

Copyright (c) 2026 Shrujan.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.