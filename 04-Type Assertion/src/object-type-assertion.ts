interface Person{
 [key: string] : string;
}

const myObj: Person = {
    name: "shubhu",
    email: "abc@gmail.com"
};

const getname = () => {
    return myObj["name"]
}

const getemail = () =>{
    return myObj["email"];
}

const getData = (key: keyof Person) : string =>{
    return myObj[key];
}

console.log(myObj.name);
getData("name");


// Type Assertion
let key = "name";
myObj[key as keyof Person];