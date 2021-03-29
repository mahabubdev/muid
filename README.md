# myUID - Simple UID generator by @mahabubdev

Just install it and use for generating simple uid

# Installation

`npm install myuid --save`
<br> or <br>
`yarn add myuid`

Then...

```
const myuid = require('myuid');

myuid(); // returns the generated id
```

in ES6:

```
import myuid from 'myuid';

myuid(); // returns the generated id
```

# Options
```
/*----------------------------------------*
* by default the base number is 16.
* supports only 2->32 as the base number.
*-----------------------------------------*/
myuid(6); // computing with base number 6
myuid(8); // computing with base number 8
myuid(12); // computing with base number 12
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
