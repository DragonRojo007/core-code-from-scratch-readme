# Easter egg list in ReactJS

Link: https://www.codewars.com/kata/5a95947f4a6b342636000173/train/javascript

**Solution**

```JavaScript
import React from 'react';

export const EggList = ({eggs}) => {
  return <ul>{eggs.map((value,id) => <EasterEgg name={value} key={id}/>)}</ul>;
};

export const EasterEgg = ({name, key}) => {
  return <li key={key}>{name}</li>;
};
```
