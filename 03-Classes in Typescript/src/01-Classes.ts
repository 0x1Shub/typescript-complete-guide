class Player {
    private height;
    public weight;

    constructor(height:number, weight:number) {
        this.height = height;
        this.weight = weight;
    }

    myHeight = () => {
        return this.height;
    };
}

const john = new Player(175, 85);
console.log(john.myHeight());



class Player1 {
      public readonly id: string;
      constructor(
        private height: number,
        public weight: number,
        protected power: number
      ) {
        this.id = String(Math.random() * 100);
      }
    
      get getMyHeight(): number {
        return this.height;
      }
    
      set changeHeight(val: number) {
        this.height = val;
      }
}
    



    
class Player2 extends Player1 {
      special: boolean;
      constructor(height: number, weight: number, power: number, special: boolean) {
        super(height, weight, power);
        this.special = special;
      }
      getMyPower = () => this.power;
}
    