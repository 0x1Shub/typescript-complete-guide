// You can add many generics

const func1 = <T, U>(n: T, o: U): { n:T, o:U } => {
  return { n, o };
};
  
const ans3 = func1<number,string>(20,"Lol");


  // extends

const func2 = <T, U extends T>(n: T, o: U): { n:T, o:U } => {
  return { n, o };
};
  
const ans4 = func1<number,number>(20,20.4);

// example

type Person2 = {
    name: string;
    age: number;
  };
  
  type Person3 = {
    name: string;
    age: number;
    email: string;
  };
  
  const user: Person = {
    name: "shubham",
    age: 21,
  };
  
  const user2: Person3 = {
    name: "shubham",
    age: 109,
    email: "abc@gmail.com",
  };
  
  const func3 = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
    return { n, o };
  };


type Person4 = {
  name: string;
  age: number;
};

const users: Person4[] = [
  {
    name: "shubham",
    age: 21,
  },
  {
    name: "john",
    age: 34,
  },
  {
    name: "Levis",
    age: 52,
  },

  {
    name: "Random",
    age: 2,
  },
];

const filterByPeoples = <T, U extends keyof T>(
  arr: T[],
  property: U,
  value: T[U]
): T[] => {
  return arr.filter((item) => item[property] === value);
};

const filteredPeopleByName = filterByPeoples(users, "name", "Nahar");
const filteredPeopleByAge = filterByPeoples(users, "age", 109);
console.log(filteredPeopleByAge);