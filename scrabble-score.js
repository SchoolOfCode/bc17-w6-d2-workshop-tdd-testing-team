export function calculateScrabbleScore(word) {

  let score= 0;
  
  const letterAndNumber={
    'A':1,
    'B':3,
    'C':3,
    'D':2,
    'E':1,
    'F':4,
    'G':2,
    'H':4,
    'I':1,
    'J':8,
    'K':5,
    'L':1,
    'M':3,
    'N':1,
    'P':3,
    'Q':10,
    'R':1,
    'S':1,
    'T':1,
    'U':1,
    'V':4,
    'W':4,
    'X':8,
    'Y':4,
    'Z':10,
  };
  

  for (const letter of word.toUpperCase()){
    // Check if the character is not a letter
  {
 if (!letterAndNumber,hasOwnProperty(letter))
    //Error to come back with characters in alphabet to be used only.
return throw console.error("Invalid character: Only letters allowed");}
  }
  
    score+=letterAndNumber[letter]
  }
  
  return score

  
}

//Notes and questions on planning:
//- 

//  iterate through each letter in the word and perform an operation (add the corresponding number to the total score)


// 1) use a for of loop to iterate over the word 
// 2) At each letter, we find the corresponding letter in the object and adding it to the score   
