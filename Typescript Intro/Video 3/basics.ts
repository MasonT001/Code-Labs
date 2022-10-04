// Primitives number, string, boolean
// More complex types arrays, and objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Mason'

let isInstructor: boolean;

isInstructor = true

//let hobbies: null;

// More complex types

let hobbies: string[]

hobbies = ['Sports', 'Cooking'];

type Person = {name: string, age: number}

let person: Person;

person = {
    name: 'Mason',
    age: 18
}

// person = {
//     isEmployee = true
// }

let people: Person[];

// Type Inference

let course: string | number = ' React the complete guide'

course = 1234;

// Functions and types

function adddd(a: number,b: number) {
    return a + b
}

function printOutput(value: any) {
    console.log(value)
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array]
    return newArray;
}

const demoArray = [1,2,3]

const updatedArray = insertAtBeginning(demoArray, -1)

// updatedArray[0].split('')


// Classes and Interfaces

class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[]

    constructor(
        public firstName: string, 
        public lastName: string, 
        public age: number, 
        private courses: string[]) {}

    enroll(courseName: string) {
        this.courses.push(courseName)
    }

    listCourses(){
        return this.courses.slice()
    }
}

const student = new Student('Mason', 'Trepagnier', 18, ["codefi"]);
student.enroll("Angular")
// student.listCourses() => codefi, angular

// student.courses => codefi and Angular

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let max: Human
max = {
    firstName: 'max',
    age: 18,

    greet(){
        console.log("Hello")
    }
}

class Instructor implements Human {
    firstName: string;
    age: number;
    
    greet: () => void
}