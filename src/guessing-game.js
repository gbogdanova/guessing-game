class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.result = null;
    }

    setRange(min, max) {
        if(min > max) {
            throw new Error("Invalid range.")
        }

        this.min = min;
        this.max = max;
    }

    guess() {
        if(this.max - this.min <= 1) {
            return this.min;
        }

        this.result = Math.ceil((this.max + this.min) / 2);
        return this.result;
    }

    lower() {
        this.max = this.result;
    }

    greater() {
        this.min = this.result;
    }
}

module.exports = GuessingGame;
