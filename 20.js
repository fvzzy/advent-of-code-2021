export const day = 20;
export const title = "trench map";

const processInput = (input) => {
  const algorithm = input.shift();
  const image = input.filter(Boolean).map((line) => line.split(""));
  return { algorithm, image };
};

const pixelValue = (x, y, image, algorithm, step) => {
  const adjacentPixels = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [0, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];

  let binary = "";
  for (let [adjX, adjY] of adjacentPixels) {
    if (
      y + adjY < 0 ||
      y + adjY >= image.length ||
      x + adjX < 0 ||
      x + adjX >= image[0].length
    ) {
      binary += step % 2 === 0 ? 0 : 1;
    } else {
      binary += image[y + adjY][x + adjX] === "#" ? 1 : 0;
    }
  }

  return algorithm[parseInt(binary, 2)];
};

const expand = (image, step) => {
  const newWidth = image.length + 4;
  const newHeight = image[0].length + 4;
  let result = Array(newHeight)
    .fill()
    .map(() => Array(newWidth).fill(step % 2 === 0 ? "." : "#"));

  for (let y = 0; y < image.length; y++) {
    for (let x = 0; x < image[0].length; x++) {
      result[y + 2][x + 2] = image[y][x];
    }
  }
  return result;
};

const enhance = (image, algorithm, step) => {
  let expandedImage = expand(image, step);
  let resultPixels = {};

  for (let y = 0; y < expandedImage.length; y++) {
    for (let x = 0; x < expandedImage[0].length; x++) {
      resultPixels[`${x}-${y}`] = pixelValue(
        x,
        y,
        expandedImage,
        algorithm,
        step
      );
    }
  }

  for (let pixel in resultPixels) {
    const [x, y] = pixel.split("-");
    expandedImage[y][x] = resultPixels[pixel];
  }

  return expandedImage;
};

const countLit = (image) => {
  return image.flat().filter((pixel) => pixel === "#").length;
};

export function problem20_1(input) {
  let { algorithm, image } = processInput(input);
  for (let i = 0; i < 2; i++) {
    image = enhance(image, algorithm, i);
  }

  return countLit(image);
}

export function problem20_2(input) {}
