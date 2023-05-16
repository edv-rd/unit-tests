export const hackerSpeak = (words) => {
  const replacements = {
a: "4",
e: "3",
i: "1",
o: "0",
s: "5"
  }
  
  return words
  .split('')
  .map((char) => replacements[char.toLowerCase()] || char)
  .join('')
}
