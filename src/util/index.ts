export function getEvenNumber(count: number): number[] {
    const even20 = [];
    for (let i = 1; i <= count; i++) {
        even20.push(i * 2);
    }
    return even20;
}