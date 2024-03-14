const myFunc = (a: number, b: string) => {
    console.log(a+b);
}

type para = Parameters<typeof myFunc>;