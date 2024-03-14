// makes evey property read only
type User2 = {
    name: string,
    email : string,
}

type readOnly = Readonly<User2>;


const readOnly: Readonly<User2>={
    name: "abc",
    email: "abc@gmail.com"
}