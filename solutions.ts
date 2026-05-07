//problem 1

function filterEvenNumbers(items: number[]): number[] {
  const arr: number[] = [];

  for (const num of items) {
    if (num % 2 === 0) {
      arr.push(num);
    }
  }
  return arr;
}

//problem 2

function reverseString(value: string): string {
  let reversed = "";

  for (const reverse of value) {
    reversed = reverse + reversed;
  }
  return reversed;
}

//problem 3

type StringNumber = string | number;

function checkType(value: StringNumber): string {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}

//problem 4

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

//problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book) {
  return {
    ...book,
    isRead: true,
  };
}

//Problem 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem 7
function getIntersection(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];

  for (const num of arr1) {
    if (arr2.includes(num)) {
      result.push(num);
    }
  }
  return result;
}

