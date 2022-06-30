1. `Holiday VIII - Duty Free`

```Javascript
function dutyFree(normPrice, discount, hol){
  //getting the discount price
  let discountPrice = (normPrice * discount) / 100;
  //total of bottles at discount price to cover holiday cost
  let totalBottles = hol / discountPrice;
  //returning an integer Round Down
  return Math.floor(totalBottles);
}
```

2. `Twice As Old`

```Javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}
```

3. `Valid Spacing`

```Javascript
function validSpacing(s) {
  let spaceCounter = 0; //counter for spaces
  let nonSpaceCounter = 0; //counter for everything that is not a space
  //verifying the start and the end of the string
  if(s[0] === ' ' || s[s.length - 1] === ' ') return false;
  
  for(let i = 0; i < s.length; i++){
    if (s[i] === ' '){
      spaceCounter++;
      nonSpaceCounter = 0;
      if(spaceCounter > 1){ //if the string has two or more spaces in a row 
        return false;
      }
    }
    if (s[i] !== ' '){ //if the current character is not a space
      spaceCounter = 0;
      nonSpaceCounter ++;
    }

  }
  return true;
}
```

4. `Fake Binary`

```Javascript
function fakeBin(x){
  let result = '';
  for(let i = 0; i < x.length; i++){
    if(parseInt(x[i]) < 5){
      result += '0';
    }
    else{
      result += '1';
    }
  }
  return result;
}
```
