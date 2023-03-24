export { };

import fetch from 'node-fetch'

function displayStringToTerminal(string: string) {
    console.log(`Here is the string to display: ${string}`)
}

var string = "Displayed to Console!"

displayStringToTerminal(string)
console.log()

function recurseNums(counter: number) {
    console.log(`Counter value: ${counter}`)
    var newCounter = counter - 1

    if (newCounter > 0) {
        recurseNums(newCounter)
    }
}

recurseNums(8)
console.log()

class Ball {
    position: [number, number]
    speed: number
    readonly color: [number, number, number] = [255,255,255]
    constructor(x: number, y: number) {
        this.position = [x, y]
        this.speed = 10;
    }

    update(){
        this.position[0] += 10
        this.position[1] += 10
        this.speed += .5
    }
}

const ball = new Ball(20,30)
console.log(`Current position: ${ball.position}`)
ball.update()
console.log(`New position: ${ball.position}`)
console.log()

function displayListValues(numList: number[], stringList: string[]){
    for(var index in numList){
        console.log(`Name: ${stringList[index]}, Number: ${numList[index]}`)
    }

}

let numList = [1,2,3,4,5]
let stringList = ["Tim", "Joe", "Stacy", "Frank", "Thrackerzod"]
displayListValues(numList, stringList)
console.log()

async function asyncDemo(){
    let promiseMessage = new Promise((resolve, reject) => {
        setTimeout(()=> resolve("Done! :D"), 2000)
    })

    let promiseMessage2 = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let promiseText: any = await promiseMessage2.json()

    let result = await promiseMessage

    interface PromiseJson{
        userId : number
        id: number
        title: string
        completed: boolean
    }
    
    
    console.log(result)
    console.log(promiseText.title)
}

asyncDemo()
