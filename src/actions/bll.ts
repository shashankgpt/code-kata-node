const defaultCount = 20;
const maxCount = 100;

export function parseInput(countArg: string) {
    let count = defaultCount;
    if (
      countArg &&
      !Number.isNaN(Number(countArg)) &&
      Number.isInteger(Number(countArg))
    ) {
      if (count > maxCount) {
        throw new Error(`Count should be less than ${maxCount}`);
      }
      count = Number.parseInt(countArg);
    } else {
      console.warn(`Invalid input. Using default count of ${count}\n`);
    }
    return count;
}