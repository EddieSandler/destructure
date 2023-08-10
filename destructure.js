//Object Destructuring 1
//8
//1846

// Object Destructuring 2
// yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659

// Object Destructuring 3
// Your name is Alejandro and you like purple
// Your name is Melissa and you like green
// Your name is   undefined   and you like green


//Array Destructuring 1
// Maya
// Marisa
// Chi


// Array Destructuring 2
// Raindrops on roses
// whiskers on kittens
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]


// Array Destructuring 3
// 10,30,20

const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

// var a = obj.numbers.a;
// var b = obj.numbers.b;
// const {numbers:{a,b}} = obj
// console.log(a,b)
const arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

let [a, b] = arr;

[a, b] = [b, a];


const raceResults = (arr) => {
  const [first, second, third, ...rest] = arr;
  const result = {
    first,
    second,
    third,
    rest
  };

return result
};



raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/









