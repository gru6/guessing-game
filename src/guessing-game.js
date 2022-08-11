class GuessingGame {
    constructor(number) {
        this.number = number;
    }

    setRange(min, max) {
        this.min = min; //0
        this.max = max; //4048
    }

    guess() {
        this.mid = Math.ceil((this.min + this.max) / 2);
        return this.mid;
    }

    lower() {
        this.max = this.mid;
    }

    greater() {
        this.min = this.mid;
    }
}


module.exports = GuessingGame;
