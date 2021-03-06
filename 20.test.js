import { problem20_1, problem20_2, day, title } from "./20.js";

describe(`day ${day}: ${title}`, () => {
  describe("example inputs", () => {
    const exampleInput = [
      "..#.#..#####.#.#.#.###.##.....###.##.#..###.####..#####..#....#..#..##..###..######.###...####..#..#####..##..#.#####...##.#.#..#.##..#.#......#.###.######.###.####...#.##.##..#..#..#####.....#.#....###..#.##......#.....#..#..#..##..#...##.######.####.####.#.#...#.......#..#.#.#...####.##.#......#..#...##.#.##..#...##.#.##..###.#......#.#.......#.#.#.####.###.##...#.....####.#..#..#.##.#....##..#.####....##...##..#...#......#.#.......#.......##..####..#...#.#.#...##..#.#..###..#####........#..####......#..#",
      "",
      "#..#.",
      "#....",
      "##..#",
      "..#..",
      "..###",
      "",
    ];

    test("part 1 solution works", () => {
      expect(problem20_1(exampleInput)).toBe(35);
    });

    test("part 2 solution works", () => {
      expect(problem20_2(exampleInput)).toBe(3351);
    });
  });
});
