
function A(n:number) : number{
    return n;
}

// With Type Aliases
type X = (n:number) => number;

const type :X = (n) => { 
    return n;
}

// Optinal Parameter in function

type FuncType = (n: number, m: number, l?:number) => number;

const func : FuncType = (a, b, c) => {

    if(typeof c === "undefined"){
        return a*b;
    }
    else{
        return a*b*c;
    }
}

console.log(func(2, 3, 4));

console.log(func(2, 3));


// Default Parameter in function


type Default = (n: number, m: number, l?:number) => number;

const def : Default = (a, b, c=20) => {
    return a*b*c;
}

console.log(def(2, 3, 4));

console.log(def(2, 3));


// Rest Operator

type Rest = (...m: number[]) => number[];

const res:Rest = (...m) => {
    return m;
}

console.log(res(2, 3, 4));

console.log(res(2, 3));
