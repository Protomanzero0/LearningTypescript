"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function welcomePerson(person) {
    console.log(`Hello ${person.firstname} ${person.lastname}`);
    return `Hello ${person.firstname} ${person.lastname}`;
}
const james = {
    firstname: "James",
    lastname: "Quick"
};
welcomePerson(james);
