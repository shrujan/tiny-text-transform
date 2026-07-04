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
  return makeSingleSpaced(text).split(" ").join("-");
}
function makeKebabLowerCase(text) {
  if (!text || typeof text !== "string") return text;
  return makeSingleSpaced(text).toLowerCase().split(" ").join("-");
}
function makePascalCase(text) {
  if (!text || typeof text !== "string") return text;
  return makeSingleSpaced(text).split(" ").map((str) => makeFirstLetterUpper(str)).join("");
}
function makeSnakeCase(text) {
  if (!text || typeof text !== "string") return text;
  return makeSingleSpaced(text).split(" ").join("_");
}
export {
  makeAllLowerCase,
  makeAllUpperCase,
  makeFirstLetterUpper,
  makeKebabCase,
  makeKebabLowerCase,
  makePascalCase,
  makeSentenceCase,
  makeSingleSpaced,
  makeSnakeCase,
  makeTitleCase
};
