export {};

function welcomePerson(person: Person){
    console.log(`Hello ${person.firstname} ${person.lastname}`)
    return `Hello ${person.firstname} ${person.lastname}`

}

const james = {
    firstname: "James",
    lastname: "Quick"
}

interface Person{
    firstname: string
    lastname: string
}

welcomePerson(james)