import { describe,it,expect } from "@jest/globals"
import {multiply,convertToMorseCode, convertToMorseCodeWord, convertToMorseCodeSentence} from "./app";

xdescribe("Multiply function tests", ()=>{
    it("Multiply function multiplies 5 and 2 to be 10",()=>{
        // Arrange
        // Act
        
        const result=multiply(5,2);
        // Assert
        expect(result).toBe(10);
    });
})

describe("Translate a text to morse code",()=>{
    it("works converting a single letter",()=>{
        // Arrange
        
        
        // Act
        const result=convertToMorseCode("G")
        // Assert
        expect(result).toBe("--.")
    })
    it("works converting a single word",()=>{
        const result=convertToMorseCodeWord("ABC")
        expect(result).toBe(".- -... -.-.")
    })
    it("works converting a sentence",()=>{
        const result=convertToMorseCodeSentence("ABC ABC ABC")
        expect(result).toBe(".- -... -.-.  .- -... -.-.  .- -... -.-.")
    })
    it("works when entered a number",()=>{
        const result=convertToMorseCode("7")
        expect(result).toBe("#")
    })
})


