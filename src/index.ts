
export function makeFirstLetterUpper(text: string): string {
  if (!text || typeof text !== 'string') return text;

  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function makeTitleCase(text: string): string {
  if (!text || typeof text !== 'string') return text;

  return text.split(' ').map( str => makeFirstLetterUpper(str) ).join(' ');
}

export function makeSentenceCase(text: string): string {
  if (!text || typeof text !== 'string') return text;

  return text.split('. ').map(str => makeFirstLetterUpper(str)).join('. ');
}

export function makeAllUpperCase(text: string): string {
  if (!text || typeof text !== 'string') return text;

  return text.toUpperCase();
}

export function makeAllLowerCase(text: string): string {
  if (!text || typeof text !== 'string') return text;

  return text.toLowerCase();
}

export function makeSingleSpaced(text: string): string {
  if (!text || typeof text !== 'string') return text;

  return text.trim().replace(/\s+/g, ' ');
}

export function makeKebabCase(text: string): string {
  if (!text || typeof text !== 'string') return text;

  const specialCharFreeStr = makeAlphanumeric(text);
  return makeSingleSpaced(specialCharFreeStr).split(' ').join('-')
}

export function makeKebabLowerCase(text: string): string {
  if (!text || typeof text !== 'string') return text;

  const specialCharFreeStr = makeAlphanumeric(text);
  return makeSingleSpaced(specialCharFreeStr).toLowerCase().split(' ').join('-')
}

export function makePascalCase(text: string): string {
  if (!text || typeof text !== 'string') return text;

  const specialCharFreeStr = makeAlphanumeric(text);
  return makeSingleSpaced(specialCharFreeStr).split(' ').map( str => makeFirstLetterUpper(str) ).join('')
}

export function makeSnakeCase(text: string): string {
  if (!text || typeof text !== 'string') return text;

  const specialCharFreeStr = makeAlphanumeric(text);
  return makeSingleSpaced(specialCharFreeStr).split(' ').join('_');
}

export function makeAlphanumeric(text: string): string {
  if (!text || typeof text !== 'string') return text;

  return text.replace(/[^a-zA-Z0-9 ]/g, '');
}

export function makeTextReversed(text: string): string {
    if (!text || typeof text !== 'string') return text;
    
    return text.split("").reverse().join("");
}

export function makeTextEmojiFree(text: string): string {
  if (!text || typeof text !== 'string') return text;
  
  return makeSingleSpaced(text.replace(/\p{Emoji_Presentation}|\p{Extended_Pictographic}/gu, ''));
}

export function makeKebabToPascalCase(text: string): string {
  if (!text || typeof text !== 'string') return text;

  text = makeAllLowerCase(text);
  return makePascalCase(text.split('-').join(' '));
}


// ---------------- Validations Functions go here ----------------

// checks whether the string contains an Emoji or Unicode charecter that are displayed as Emoji
export function checkEmoji(text: string): boolean {
  if (!text || typeof text !== 'string') return false;
  
  return /\p{Emoji_Presentation}|\p{Extended_Pictographic}/u.test(text);
}

