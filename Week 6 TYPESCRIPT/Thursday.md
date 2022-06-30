`1. Tile`
```Typescript
export class Tile{
    letter: string;
    value: number;

    constructor(letter: string, value: number){
        this.letter = letter;
        this.value = value;
    }

    printTile(){
        console.log(`
            ===========================
            Letter: ${this.letter}
            Value: ${this.value}
            ===========================
        `)
    }
}
```

`2. Time`
```Typescript
export class Time{
    hour: number;
    minute: number;
    second: number;

    constructor(hour: number, minute: number, second: number){
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    printTime(){
        console.log(`
            ===========================
              Hours: ${this.hour};
              Minutes: ${this.minute};
              seconds: ${this.second};
            ===========================
        `);
    }

    getInSeconds(){
        this.hour = (this.hour * 60) * 60; //hours to minutes then minutes to seconds
        this.minute = this.minute * 60;
        return this.hour + this.minute + this.second;
    }
}
```

`3. Rational`
```Typescript
export class Rational {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  printRational() {
    console.log(`${this.numerator} / ${this.denominator}`);
  }

  invert() {
    [this.numerator, this.denominator] = [this.denominator, this.numerator];
  }

  toFloat(): number {
    return this.numerator / this.denominator;
  }

  gcd(n: number, d: number): number {
    if (d === 0) return n;
    return this.gcd(d, n % d);
  }

  reduce() {
    const gcd = this.gcd(this.numerator, this.denominator);
    this.numerator = this.numerator / gcd;
    this.denominator = this.denominator / gcd;
  }
}
```
