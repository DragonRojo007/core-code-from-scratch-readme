1.`Simple Validation Of A Username`
```Javascript
function validateUsr(username) {
    const res = /^[a-z0-9_]{4,16}$/.test(username);
    return res;
}
```

2.`Get Number From String`
```Javascript
function getNumberFromString(s) {
    return Number(s.replace(/\D/g, ''));
}
```
