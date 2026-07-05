
export function makeFirstLetterUpper(text: string) {
  if (!text || typeof text !== 'string') return text;

  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function makeTitleCase(text: string) {
  if (!text || typeof text !== 'string') return text;

  return text.split(' ').map( str => makeFirstLetterUpper(str) ).join(' ');
}

export function makeSentenceCase(text: string) {
  if (!text || typeof text !== 'string') return text;

  return text.split('. ').map(str => makeFirstLetterUpper(str)).join('. ');
}

export function makeAllUpperCase(text: string) {
  if (!text || typeof text !== 'string') return text;

  return text.toUpperCase();
}

export function makeAllLowerCase(text: string) {
  if (!text || typeof text !== 'string') return text;

  return text.toLowerCase();
}

export function makeSingleSpaced(text: string) {
  if (!text || typeof text !== 'string') return text;

  return text.trim().replace(/\s+/g, ' ');
}

export function makeKebabCase(text: string) {
  if (!text || typeof text !== 'string') return text;

  const specialCharFreeStr = makeAlphanumeric(text);
  return makeSingleSpaced(specialCharFreeStr).split(' ').join('-')
}

export function makeKebabLowerCase(text: string) {
  if (!text || typeof text !== 'string') return text;

  const specialCharFreeStr = makeAlphanumeric(text);
  return makeSingleSpaced(specialCharFreeStr).toLowerCase().split(' ').join('-')
}

export function makePascalCase(text: string) {
  if (!text || typeof text !== 'string') return text;

  const specialCharFreeStr = makeAlphanumeric(text);
  return makeSingleSpaced(specialCharFreeStr).split(' ').map( str => makeFirstLetterUpper(str) ).join('')
}

export function makeSnakeCase(text: string) {
  if (!text || typeof text !== 'string') return text;

  const specialCharFreeStr = makeAlphanumeric(text);
  return makeSingleSpaced(specialCharFreeStr).split(' ').join('_');
}

export function makeAlphanumeric(text: string) {
  if (!text || typeof text !== 'string') return text;

  return text.replace(/[^a-zA-Z0-9 ]/g, '');
}

export function makeTextReversed(text: string): string {
    if (!text || typeof text !== 'string') return text;
    
    return text.split("").reverse().join("");
}
