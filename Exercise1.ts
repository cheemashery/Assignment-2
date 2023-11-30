// Write a program that calculates the area of a rectangle.

// 1st way:

let length = 3;
let width = 5;
let area_of_rectangle = length * width;
console.log(area_of_rectangle);

// 2nd way:

function rectangle_area(length: number, width: number) {
  console.log(length * width);
}
rectangle_area(3, 5);
export {};
