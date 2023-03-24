"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
function displayStringToTerminal(string) {
    console.log(`Here is the string to display: ${string}`);
}
var string = "Displayed to Console!";
displayStringToTerminal(string);
console.log();
function recurseNums(counter) {
    console.log(`Counter value: ${counter}`);
    var newCounter = counter - 1;
    if (newCounter > 0) {
        recurseNums(newCounter);
    }
}
recurseNums(8);
console.log();
class Ball {
    constructor(x, y) {
        this.color = [255, 255, 255];
        this.position = [x, y];
        this.speed = 10;
    }
    update() {
        this.position[0] += 10;
        this.position[1] += 10;
        this.speed += .5;
    }
}
const ball = new Ball(20, 30);
console.log(`Current position: ${ball.position}`);
ball.update();
console.log(`New position: ${ball.position}`);
console.log();
function displayListValues(numList, stringList) {
    for (var index in numList) {
        console.log(`Name: ${stringList[index]}, Number: ${numList[index]}`);
    }
}
let numList = [1, 2, 3, 4, 5];
let stringList = ["Tim", "Joe", "Stacy", "Frank", "Thrackerzod"];
displayListValues(numList, stringList);
console.log();
async function asyncDemo() {
    let promiseMessage = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done! :D"), 2000);
    });
    let promiseMessage2 = await (0, node_fetch_1.default)('https://jsonplaceholder.typicode.com/todos/1');
    let promiseText = await promiseMessage2.json();
    let result = await promiseMessage;
    console.log(result);
    console.log(promiseText.title);
}
asyncDemo();
