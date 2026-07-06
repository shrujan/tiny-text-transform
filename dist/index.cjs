"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  checkEmoji: () => checkEmoji,
  makeAllLowerCase: () => makeAllLowerCase,
  makeAllUpperCase: () => makeAllUpperCase,
  makeAlphanumeric: () => makeAlphanumeric,
  makeFirstLetterUpper: () => makeFirstLetterUpper,
  makeKebabCase: () => makeKebabCase,
  makeKebabLowerCase: () => makeKebabLowerCase,
  makePascalCase: () => makePascalCase,
  makeSentenceCase: () => makeSentenceCase,
  makeSingleSpaced: () => makeSingleSpaced,
  makeSnakeCase: () => makeSnakeCase,
  makeTextEmojiFree: () => makeTextEmojiFree,
  makeTextReversed: () => makeTextReversed,
  makeTitleCase: () => makeTitleCase
});
module.exports = __toCommonJS(index_exports);
function makeFirstLetterUpper(text) {
  if (!text || typeof text !== "string") return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}
function makeTitleCase(text) {
  if (!text || typeof text !== "string") return text;
  return text.split(" ").map((str) => makeFirstLetterUpper(str)).join(" ");
}
function makeSentenceCase(text) {
  if (!text || typeof text !== "string") return text;
  return text.split(". ").map((str) => makeFirstLetterUpper(str)).join(". ");
}
function makeAllUpperCase(text) {
  if (!text || typeof text !== "string") return text;
  return text.toUpperCase();
}
function makeAllLowerCase(text) {
  if (!text || typeof text !== "string") return text;
  return text.toLowerCase();
}
function makeSingleSpaced(text) {
  if (!text || typeof text !== "string") return text;
  return text.trim().replace(/\s+/g, " ");
}
function makeKebabCase(text) {
  if (!text || typeof text !== "string") return text;
  const specialCharFreeStr = makeAlphanumeric(text);
  return makeSingleSpaced(specialCharFreeStr).split(" ").join("-");
}
function makeKebabLowerCase(text) {
  if (!text || typeof text !== "string") return text;
  const specialCharFreeStr = makeAlphanumeric(text);
  return makeSingleSpaced(specialCharFreeStr).toLowerCase().split(" ").join("-");
}
function makePascalCase(text) {
  if (!text || typeof text !== "string") return text;
  const specialCharFreeStr = makeAlphanumeric(text);
  return makeSingleSpaced(specialCharFreeStr).split(" ").map((str) => makeFirstLetterUpper(str)).join("");
}
function makeSnakeCase(text) {
  if (!text || typeof text !== "string") return text;
  const specialCharFreeStr = makeAlphanumeric(text);
  return makeSingleSpaced(specialCharFreeStr).split(" ").join("_");
}
function makeAlphanumeric(text) {
  if (!text || typeof text !== "string") return text;
  return text.replace(/[^a-zA-Z0-9 ]/g, "");
}
function makeTextReversed(text) {
  if (!text || typeof text !== "string") return text;
  return text.split("").reverse().join("");
}
function makeTextEmojiFree(text) {
  if (!text || typeof text !== "string") return text;
  return makeSingleSpaced(text.replace(/\p{Emoji_Presentation}|\p{Extended_Pictographic}/gu, ""));
}
function checkEmoji(text) {
  if (!text || typeof text !== "string") return false;
  return /\p{Emoji_Presentation}|\p{Extended_Pictographic}/u.test(text);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  checkEmoji,
  makeAllLowerCase,
  makeAllUpperCase,
  makeAlphanumeric,
  makeFirstLetterUpper,
  makeKebabCase,
  makeKebabLowerCase,
  makePascalCase,
  makeSentenceCase,
  makeSingleSpaced,
  makeSnakeCase,
  makeTextEmojiFree,
  makeTextReversed,
  makeTitleCase
});
