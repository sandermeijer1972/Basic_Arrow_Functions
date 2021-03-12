// A
// zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
  };

const ikRockArrowFunctions2 = () => console.log("Yeah, ik rock de arrow functions!");

 console.log("A"); 
ikRockArrowFunctions();
ikRockArrowFunctions2();

// B
const fivePlusSeven = function () {
  return 5 + 7
};

const fivePlusSeven2 = () => 5 + 7;

fivePlusSeven();
fivePlusSeven2();
console.log("B");
console.log(fivePlusSeven());
console.log(fivePlusSeven2());

// C
const myFunction = (a,b) => a + b;

console.log("C");
console.log(myFunction(2,3));
console.log(myFunction(5,8));

// D
const addFive = a => a + 5;

console.log("D");
console.log(addFive(3));
console.log(addFive(93));

// E
const createObject = () => ({value: "Hoi"});

console.log("E");
console.log(createObject());




