"use strict";
// Write a program that takes input and calculates the volume of a cube.
Object.defineProperty(exports, "__esModule", { value: true });
//1st way
let length = 2;
let width = 3;
let height = 4;
let volume_of_cube = length * width * height;
console.log(volume_of_cube);
// 2nd way:
function cube_volume(legth, width, height) {
    console.log(legth * width * height);
}
cube_volume(2, 3, 4);
