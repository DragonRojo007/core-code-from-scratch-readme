1.`A Rule Of Divisibility By 13`
```Typescript
export function thirt(n: number): number {
    const remainders = [1, 10, 9, 12, 3, 4];
    let reversedNumber: string[] = n.toString().split('').reverse();
    let index = 0;
    let result = reversedNumber.reduce((total: number, digit: string) => {
        if (index > 5) index = 0;
        return total + Number(digit) * remainders[index++];
    }, 0);
    if (result === n) return result;
    return thirt(result);
}
```
2.`Playing With Digits`
```Typescript
export class G964 {
    public static digPow = (n: number, p: number) => {
        const sum = n
            .toString()
            .split('')
            .map(Number)
            .reduce((prev: number, curr: number) => prev + Math.pow(curr, p++), 0);
        if (sum % n === 0) return sum / n;
        return -1;
    };
}
```
3.`Valid Braces`
```Typescript
export function validBraces(braces: string): boolean {
  const validate_braces = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ]);
  let result: string[] = [];
  for(let i = 0; i < braces.length; i++){
    if(validate_braces.has(braces[i])){
      result.push(braces[i]); 
      continue; //skipping next validation
    } 
    if(braces[i] !== validate_braces.get(result.pop() || '')) return false;
  }
  return result.length === 0;
}
```

4.`Tic-Tac-Toe`
```Typescript
function solveTTT(b) {
    var xwin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (var i in xwin)
        if (xwin[i].map((x) => b[x]).join('') == 'XX')
            return xwin[i].reduce((x, y) => (b[y] == '' ? x + y : x), 0);
    for (var i in b) if (b[i] == '') return +i;
}
```

5.`Tic-Tac-Toe table Generator`
```Typescript
function displayBoard(board, width) {
    let result = "";
    for (let i = 0; i < board.length; i++) {
        if (i > 0 && i % width === 0) {
            result += "---".repeat(width) + "-".repeat(width - 1) + "\n";
        }

        result += " " + board[i] + " ";

        if (i + 1 < board.length) {
            if ((i + 1) % width === 0) result += "\n";
            else result += "|";
        }
    }
    return result;
}
```
