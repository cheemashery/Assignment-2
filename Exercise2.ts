// Write a program that takes input and calculates the volume of a cube.

//1st way

let length = 2;
let width = 3;
let height = 4;
let volume_of_cube = length * width * height;
console.log(volume_of_cube);

// 2nd way:

function cube_volume(legth: number, width: number, height: number) {
  console.log(legth * width * height);
}
cube_volume(2, 3, 4);
export {};
