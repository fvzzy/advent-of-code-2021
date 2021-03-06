import { problem23_1, problem23_2, day, title } from "./23.js";

describe(`day ${day}: ${title}`, () => {
  describe("example inputs", () => {
    const exampleInput = [
      "#############",
      "#...........#",
      "###B#C#B#D###",
      "  #A#D#C#A#  ",
      "  #########  ",
      "",
    ];

    test("part 1 solution works", () => {
      expect(problem23_1(exampleInput)).toBe(12521);
    });

    test("part 2 solution works", () => {
      expect(problem23_2(exampleInput)).toBe(undefined);
    });
  });
});
