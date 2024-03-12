const x:number = 25;
console.log(x);

const fName : string = "Shubham";
console.log(fName);

let a:any = "String";
console.log(a);


// Union Variable 

let surname: string | number;
surname = "Yeram";
surname = 5;

console.log(surname);

// function declaration

const func = (a: number, b: number) => {
    console.log(a, b);
}

function sum(a: number, b: number) : number{
    return a*b;
}