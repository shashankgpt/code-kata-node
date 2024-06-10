import { NumberType } from "../type";

export function getNumberList(count: number, type: NumberType): number[] {
    if (!count) return [];
    if (type !== NumberType.EVEN) { // Not Implemented for other types
        throw new Error('Only even numbers are allowed');
    }
    const number = [];
    for (let i = 1; i <= count; i++) {
        number.push(i * 2);
    }
    return number;
}