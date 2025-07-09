export const codeExercises = [
  {
    id: "ex1",

    title: "Exercise 1: Remove Duplicates",
    description:
      "Given an array of strings with repeated letters, return a new array without any repeated letters.",

    initialCode: `const letters = ['A', 'A', 'B', 'C', 'C', 'D'];

function removeDuplicates(arr) {
  // Write your code here
  return [...new Set(arr)];
}

console.log(removeDuplicates(letters));`,
    expectedOutput: "A,B,C,D\n",
  },
  {
    id: "ex2",
    title: "Exercise 2: Understanding `this` Context",
    description:
      "Given the provided code, modify only the last two lines to correctly print the `name` property of the `cat` object.",

    initialCode: `let cat = {
  name: 'meou',
  callName: function () {
    console.log(this.name);
  },
};

let callName = cat.callName.bind(cat);
callName();`,
    expectedOutput: "meou\n",
  },
  {
    id: "ex3",
    title: "Exercise 3: Class Instantiation and Methods",
    description:
      "Given the `Person` class, create two instances of the class with different names and ages, and then call the `sayHello` method on each instance.",

    initialCode: `// Define a class called 'Person'
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
      console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');


  }
}

// Create instances of the 'Person' class 
// Call the 'sayHello' method on each person

`,
    expectedOutput:
      "Hello, my name is Alice and I am 30 years old.\nHello, my name is Bob and I am 25 years old.\n",
  },
];
