import { calculateScrabbleScore } from "./scrabble-score";
import {test, expect} from "vitest"

test('It does not return 1 point', ()=>{expect(calculateScrabbleScore('a')).toBe(1)})
//check if it has any characters not in the object
test('no symbols used just letters'()=> {expect(calculateScrabbleScore('a')).toBe(1)})








