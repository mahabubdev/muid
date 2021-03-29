# myUID - Simple UID generator by @mahabubdev

Just install it and use for generating simple uid

# Installation

`npm install myuid --save`
<br> or <br>
`yarn add myuid`

Then...

```
const myuid = require('myuid');
// by default the base number is 16.
myuid();

// or
// supports only 2->32 as the base number.
myuid(8); 
```

in ES6:

```
import myuid from 'myuid';
// by default the base number is 16.
myuid(); 

// or
// supports only 2->32 as the base number.
myuid(8); 
```

How it returns 
```
// in base 16 (by default)
26893d11f7d624
c8bf02c8a2088
b3b27c18df4a3

// in base 32
ct59nvd0sco
710cfjcob40

// in base 24
7bkacdi4dek8
a8h1ida53d98

// in base 6
155442533105314350430
222504154304155553310

// in base 8
222504154304155553310
222504154304155553310

// in base 12
b114b296405a840
5a7a2b8a1242b32
```
