1.`What's Your Posion?`
```Javascript
function find(rats) {
    return rats.reduce((prev, curr) => {
        return prev + Math.pow(2, curr);
    }, 0);
}
```

2.`Array.diff`
```Javascript
function array_diff(a, b) {
    return a.filter((value) => !b.includes(value));
}
```
