class sampleClass1{
    constructor(public s: string, public t: string){

    }
}

type inst = InstanceType<typeof sampleClass1>;

const a: inst = {
    s : "44",
    t: "asas",
}