const myFunc1 = (a: number, b: string) : string => {
    return a+b;
}

type FuncType = ReturnType<typeof myFunc1>;