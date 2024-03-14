// Require is opposite of Partial

type User1 = {
    name?: string,
    email : string,
}

type req = Required<User1>;


const user: Required<User1>={
    name: "abc",
    email: "abc@gmail.com"
}