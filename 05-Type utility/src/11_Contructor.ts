class sampleClass{
    constructor(public s: string, public t: string){

    }
}

type cons = ConstructorParameters<typeof sampleClass>;