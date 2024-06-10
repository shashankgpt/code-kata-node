import { NumberType } from "../type";
import { getNumberList } from "./";

describe("getNumberList", () => {
  it("should return an array of even numbers", () => {
    expect(getNumberList(2, NumberType.EVEN)).toEqual([2, 4]);
  });

  it("should return empty array", () => {
    expect(getNumberList(0, NumberType.EVEN)).toEqual([]);
  });

  it("should throw an error when Number type is not even", () => {
    expect(() => getNumberList(2, NumberType.ODD)).toThrow('Only even numbers are allowed');
  });
});