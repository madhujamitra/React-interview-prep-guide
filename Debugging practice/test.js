const BRAILLE_ALPHABET = {
    a: "O.....",
    b: "O.O...",
    c: "OO....",
    d: "OO.O..",
    e: "O..O..",
    f: "OOO...",
    g: "OOOO..",
    h: "O.OO..",
    i: ".OO...",
    j: ".OOO..",
    k: "O...O.",
    l: "O.O.O.",
    m: "OO..O.",
    n: "OO.OO.",
    o: "O..OO.",
    p: "OOO.O.",
    q: "OOOOO.",
    r: "O.OOO.",
    s: ".OO.O.",
    t: ".OOOO.",
    u: "O...OO",
    v: "O.O.OO",
    w: ".OOO.O",
    x: "OO..OO",
    y: "OO.OOO",
    z: "O..OOO",
    " ": "......",
  };
  
  const BRAILLE_CAPITAL = ".....O";
  const BRAILLE_NUMBER = "..OOO.";
  
  const BRAILLE_NUMBERS = {
    1: "O.....",
    2: "O.O...",
    3: "OO....",
    4: "OO.O..",
    5: "O..O..",
    6: "OOO...",
    7: "OOOO..",
    8: "O.OO..",
    9: ".OO...",
    0: ".OOO..",
  };
  
  const ENGLISH_ALPHABET = Object.fromEntries(
    Object.entries(BRAILLE_ALPHABET).map(([k, v]) => [v, k])
  );
  const ENGLISH_NUMBERS = Object.fromEntries(
    Object.entries(BRAILLE_NUMBERS).map(([k, v]) => [v, k])
  );
  
  function translateToBraille(englishText) {
    let brailleTranslation = "";
    let isNumber = false;
  
    for (let char of englishText) {
      if (char >= "A" && char <= "Z") {
        brailleTranslation += BRAILLE_CAPITAL;
        char = char.toLowerCase();
      }
  
      if (char >= "0" && char <= "9") {
        if (!isNumber) {
          brailleTranslation += BRAILLE_NUMBER;
          isNumber = true;
        }
        brailleTranslation += BRAILLE_NUMBERS[char];
      } else if (char === " ") {
        brailleTranslation += BRAILLE_ALPHABET[char];
        isNumber = false;
      } else {
        brailleTranslation += BRAILLE_ALPHABET[char];
        isNumber = false;
      }
    }
    return brailleTranslation;
  }
  
  function translateToEnglish(brailleText) {
    let englishTranslation = "";
    let isCapital = false;
    let isNumber = false;
  
    const brailleChars = brailleText.match(/.{1,6}/g); 
  
    for (let braille of brailleChars) {
      if (braille === BRAILLE_CAPITAL) {
        isCapital = true;
        continue;
      } else if (braille === BRAILLE_NUMBER) {
        isNumber = true;
        continue;
      }
  
      let char;
      if (isNumber) {
        char = ENGLISH_NUMBERS[braille];
        isNumber = false;
      } else {
        char = ENGLISH_ALPHABET[braille];
        char = isCapital ? char.toUpperCase() : char;
        isCapital = false;
      }
  
      englishTranslation += char;
    }
    return englishTranslation;
  }
  
  function main() {
    const input = process.argv.slice(2).join(" ");
  
    if (input[0] === "O" || input[0] === ".") {
      console.log(translateToEnglish(input));
    } else {
      console.log(translateToBraille(input));
    }
  }
  
  main();
  