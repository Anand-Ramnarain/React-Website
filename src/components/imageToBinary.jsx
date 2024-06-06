// Import the Image class from the 'image-js' library, which provides utilities for image processing.
import { Image } from "image-js";

// Defines the function that converts a image to a binary string representation.
export async function imageToBinary(imagePath) {
  // Load the image from the provided path. The Image.load function returns a promise, so we use await.
  const image = await Image.load(imagePath);

  // Convert the image to a greyscale version. The grey method transforms the image to greyscale.
  const greyImage = image.grey();

  // Calculate the threshold value for binarization. This is typically half of the maximum pixel value.
  const threshold = greyImage.maxValue / 2;

  // Initialize an empty string to build the binary representation of the image.
  let binaryString = "";

  // Loop through each row (y-coordinate) of the greyscale image.
  for (let y = 0; y < greyImage.height; y++) {
    // Loop through each column (x-coordinate) of the current row.
    for (let x = 0; x < greyImage.width; x++) {
      // Get the pixel value at the current (x, y) position.
      const pixelValue = greyImage.getPixelXY(x, y);

      // Compare the pixel value to the threshold.
      // If the pixel value is greater than the threshold, append '1' to the binary string (indicating a white pixel in binary image).
      // Otherwise, append '0' (indicating a black pixel in binary image).
      binaryString += pixelValue > threshold ? "1" : "0";
    }
    // After processing each row, add a newline character to separate rows in the binary string.
    binaryString += "\n";
  }
  // Return the complete binary string representation of the image.
  return binaryString;
}

//I found that the image-js doc help in converting the image to a greyscale so i can got through each pixel as assign a 0 or 1 value to it
//https://www.npmjs.com/package/image-js
//https://image-js.github.io/image-js/
//The codde here help in learning how to assign values to the pixels i just had to change it so it would work for react/js
//https://www.geeksforgeeks.org/matlab-converting-a-grayscale-image-to-binary-image-using-thresholding/
