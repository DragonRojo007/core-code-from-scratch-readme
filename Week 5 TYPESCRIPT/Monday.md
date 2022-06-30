1.`Find The Missing Letter`
```Javascript
function findMissingLetter(array) {
    const missing = array
        .map((letter) => letter.charCodeAt())
        .find((code, i, charCodeArray) => {
            if (i === 0) return false;
            return code - 1 != charCodeArray[i - 1];
        });
    return String.fromCharCode(missing - 1);
}
```

2.`Reverse Or Rotate?`
```Javascript
function revrot(str, sz) {
    if (sz <= 0 || str === '' || sz > str.length) return '';
    //str.push(str.shift());
    let reg = new RegExp(`\\d{${sz}}`, 'g');
    let chunks = str.match(reg); //pedazos en base a sz
    let sum = 0;
    let chunkArray = [];
    let result = chunks.map((chunk) => {
        console.log(chunk);
        sum = chunk
            .split('')
            .map((digit) => Math.pow(+digit, 3))  // saca las potencias de cada pedazo
            .reduce((prev, curr) => prev + curr, 0); // suma las potencias de cada pedazo
        chunkArray = chunk.split(''); // se parte el arreglo en pedazos otra ves
        if (sum % 2 === 0) return chunkArray.reverse().join(''); // realizando una reversa
        return chunkArray.push(chunkArray.shift()), chunkArray.join(''); //creando nuevamente un string
    });
    return result.join(''); //regresando el array original a un string
}
```
