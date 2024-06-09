import {getEvenNumber} from "./";

describe('getEvenNumber', () => {
    it('should return an array of even numbers', () => {
        expect(getEvenNumber(2)).toEqual([2, 4]);
    });

    it('should return empty array', () => {
        expect(getEvenNumber(0)).toEqual([]);
    });
})