1.`Square(n) Sum`
```Typescript
export function squareSum(numbers: number[]): number {
    return numbers.reduce(
        (prev: number, current: number) => prev + Math.pow(current, 2), 0);
}
```

2.`Growth Of A population`
```Typescript
export class G964 {

    public static nbYear = (p0, percent, aug, p) => {
        if (aug === null) aug = 0;
        percent = percent / 100;
        let totalYears = 0;
        while (p0 < p) {
            p0 = parseInt(p0 + p0 * percent + aug);
            totalYears++;
        }
        return totalYears;
    }
}
```
3.`Mubmling`
```Typescript
export function accum(s: string): string {
    return s
        .toLowerCase()
        .split('')
        .map((value: string, index: number) => `${value.toUpperCase()}${value.repeat(index)}`)
        .join('-');
}
```
4.`A Wolf In Sheep's Clothing`
```Typescript
export function warnTheSheep(queue: string[]): string {
    let wolfPosition = queue.indexOf('wolf');
    if (wolfPosition === queue.length - 1) return 'Pls go away and stop eating my sheep';
    let sheepPosition = queue.reverse().indexOf('wolf');
    return `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`;
}
```
