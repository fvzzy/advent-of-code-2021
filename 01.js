export const day = 1;
export const title = "sonar sweep";

export function problem1_1(input) {
  const depths = input.map(Number);

  let increases = 0;
  for (let i = 1; i < depths.length; i++) {
    if (depths[i] > depths[i - 1]) increases++;
  }

  return increases;
}

export function problem1_2(input) {
  const depths = input.map(Number);

  let increases = 0;
  let prevSum = depths[0] + depths[1] + depths[2];

  for (let i = 3; i < depths.length; i++) {
    let sum = prevSum + depths[i] - depths[i - 3];
    if (prevSum < sum) increases++;
    prevSum = sum;
  }

  return increases;
}
