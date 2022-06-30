1. `Multiply`

```Javascript
function multiply(a, b){
  return a * b;
}

```

2. `ASCII Total`

```Javascript
function uniTotal (str) {
  let total = 0;  
  let length = str.length;  //getting the total length of the string 
  for(let i = 0; i < length; i++){
    total += str[i].charCodeAt();
  }
  return total;
}
```

3. `Char From ASCII Value`

```Javascript
function getChar(c){
  return String.fromCharCode(c)
}
```

4. `Binary Addition`

```Javascript
function addBinary(a,b) {
  //using toString(2) to obtain the binary value of the number
  return (a+b).toString(2);
}
```
5. `Student's Final Grade`

```Javascript
function finalGrade (exam, projects) {
  let total = 0;
  if (exam > 90 || projects > 10) {
    total = 100;
  } else if (exam > 75 && projects >= 5) {
    total = 90;
  } else if (exam > 50 && projects >= 2) {
    total = 75;
  }
  return total;
}
```
