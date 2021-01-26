# Download json as csv
Simple método para descargar objeto a .csv 

## Instalación
npm:
```
npm install @htmike/downloadr-json-as-csv
```

yarn:
```
yarn add @htmike/downloadr-json-as-csv
```

## Uso
Javascript
```js
import { toJson } from '@htmike/downloadr-json-as-csc';

const list = [
  { name: 'Mike', id: 1, level: 10 },
  { name: 'Mickey', id: 2, level: 9}
];

toCSV(list, 'lista'); // Result lista.csv
                       // name|id|level
                       // Mike|1|10
                       // Mickey|2|9
```

With API requests
```js
fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => toCSV(json, 'lista')) // Result lista.csv
                                      // completed|id|title|userId
                                      // false|1|delectus aut autem|1
                                      // ...
```
