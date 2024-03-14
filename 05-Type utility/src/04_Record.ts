type User3 = {
    name: string,
    email: string,
}

type record = Record<"name" | "email" , string>;

// Example

interface UserInfo {
    age : number,
}

type Username = "john" | "abnc" | "elon" | "jack";

const users: Record<Username, UserInfo> = {
    john: {age: 34},
    abnc: {age: 34},
    elon: {age: 34},
    jack: {age: 35},
}