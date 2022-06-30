1.`String Cleaning`
```Javascript
function stringClean(s) {
    return s.replace(/[0-9]/g, '');
}
```

2.`Password Validation`
```Javascript
function validate(password) {
    return (
        /^[A-Za-z0-9]{6,}$/.test(password) &&
        /[A-Z]+/.test(password) &&
        /[a-z]+/.test(password) &&
        /[0-9]+/.test(password)
    );
}
```
