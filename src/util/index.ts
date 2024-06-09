export function getEvenNumber(count: number = 20): number[] {
    const even20 = [];
    for (let i = 1; i <= 20; i++) {
        even20.push(i * 2);
    }
    return even20;
}