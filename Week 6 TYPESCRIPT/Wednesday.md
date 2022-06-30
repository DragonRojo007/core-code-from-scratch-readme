1.`Duplicate Encoder`
```Typescript
const appereances = (word: string[], charToCount: string) => {
    return word.filter((char: string) => char === charToCount).length;
};

export function duplicateEncode(word: string) {
    let result = '',
        encodeChar = '';
    const characters = [...word.toLowerCase()];
    characters.forEach((char) => {
        encodeChar = ')';
        if (appereances(characters, char) === 1) {
            encodeChar = '(';
        }
        result += encodeChar;
    });
    return result;
}
```

2.`Find The Odd Int`
```Typescript
const appereances = (numbers: number[], nToCount: number) => {
    return numbers.filter((n: number) => n === nToCount).length;
};

export const findOdd = (xs: number[]): number => {
    const nonRepeatNumbers = new Set(xs);
    for (let n of nonRepeatNumbers) {
        if (appereances(xs, n) % 2 !== 0) return n;
    }
    return -1;
};
```
3. `Which Are In?`
```Typescript
export function inArray(a1: string[], a2: string[]): string[] {
  return a1
  .filter((a: string) => a2.some((b: string ) => b.includes(a)))
  .sort();
}
```

4. `Sums Of Parts`
```Typescript
export function partsSums(ls: number[]): number[] {
  const result: number[] = [];
  const total = ls.reduce((prev: number, curr: number) => prev + curr, 0);
  result.push(total);
  for (let i = 0; i < ls.length; i++) {
    result.push(result[i] - ls[i]);
  }
  return result;
}
```

5. `Consecutive Strings`
```Typescript
export function longestConsec(strarr: string[], k: number): string {
  let max = '';
  const n = strarr.length;
  for (let i = 0; i <= n - k && k > 0 && k <= n; i++) {
    const newStr = strarr.slice(i, i + k).join('');
    max = max.length >= newStr.length ? max : newStr;
  }
  return max;
}
```
