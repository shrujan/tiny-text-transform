// src/index.ts
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
function makeKebabToPascalCase(text) {
  if (!text || typeof text !== "string") return text;
  text = makeAllLowerCase(text);
  return makePascalCase(text.split("-").join(" "));
}
function checkEmoji(text) {
  if (!text || typeof text !== "string") return false;
  return /\p{Emoji_Presentation}|\p{Extended_Pictographic}/u.test(text);
}
export {
  checkEmoji,
  makeAllLowerCase,
  makeAllUpperCase,
  makeAlphanumeric,
  makeFirstLetterUpper,
  makeKebabCase,
  makeKebabLowerCase,
  makeKebabToPascalCase,
  makePascalCase,
  makeSentenceCase,
  makeSingleSpaced,
  makeSnakeCase,
  makeTextEmojiFree,
  makeTextReversed,
  makeTitleCase
};
