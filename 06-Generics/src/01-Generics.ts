type Person = {
    name: string,
    age : number,
}

const func = <T>(n: T) : T => {
    const text: T=n
    return n;
};

const person1: Person = {
    name: "Shubham",
    age: 21,
}

const ans = func(person1);

const ans1 = func<Person>(person1);


