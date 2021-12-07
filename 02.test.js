import { problem2_1 } from "./02.js";

describe("day 2: dive!", () => {
  describe("example inputs", () => {
    const exampleInput = [
      "forward 5",
      "down 5",
      "forward 8",
      "up 3",
      "down 8",
      "forward 2",
    ];

    test("part 1 solution works", () => {
      expect(problem2_1(exampleInput)).toBe(150);
    });
  });
});