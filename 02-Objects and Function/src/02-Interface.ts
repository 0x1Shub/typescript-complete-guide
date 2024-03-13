interface abc {
    height: number,
    weight: number,
    gender?: string,
};

type Functype = (n: number, m: number) => void;

interface newObj extends abc {
    trainee : boolean,
    func?: Functype;
}

const x : newObj = {
    height : 122,
    weight: 123,
    trainee: false,
}

const x1 : newObj = {
    height : 122,
    weight: 33,
    trainee: true,
    func: (n, m) => {
        console.log(n*m)
    }
}