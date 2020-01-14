# Description

<img src="https://jehwanyoo.github.io/bill-counter-js/examples/gray-auto-bill-counter-164688.jpg" alt="bill-counter" width="300">

The bill counter effect is expressed in JavaScript.

See [API Docs](#API) for details.

# Required

This library does not require any other libraries in production.

In development, we bundled with webpack.

# Installation

## Local

<a href="https://unpkg.com/bill-counter-js@0.0.2/dist/bill-counter.min.js" download>download</a>

## CDN

```
<script src="https://unpkg.com/bill-counter-js@0.0.2/dist/bill-counter.min.js" integrity="sha384-6A0YkxFyDgTmoOetzKpRPLH+9chxoapSu2otnjrrLQk4Wip4TL8RIZiYzIzaZq9S" crossorigin="anonymous"></script>
```

## NPM

`yarn add bill-counter-js`

or

`npm install bill-counter-js -S`

# How to use

## NOTE

You must run the function after ['DOMContentLoaded'](https://developer.mozilla.org/ko/docs/Web/Events/DOMContentLoaded) event.

Similar to jquery's \$(document).ready().

DOMContentLoaded is a web standard and jQuery is not a web standard.

## Browser

```
<script
  src="https://unpkg.com/bill-counter-js@0.0.2/dist/bill-counter.min.js"
  integrity="sha384-6A0YkxFyDgTmoOetzKpRPLH+9chxoapSu2otnjrrLQk4Wip4TL8RIZiYzIzaZq9S"
  crossorigin="anonymous"
></script>

document.addEventListener('DOMContentLoaded', () => {
  $B.countByN('selector-id', targetMoney, N, interval);
}
```

see [example source](https://github.com/JeHwanYoo/bill-counter-js/blob/master/examples/dollar.html)

## ESM

```
import { $B } from 'https://unpkg.com/bill-counter-js@0.0.2/dist/bill-counter.esm.js';

document.addEventListener('DOMContentLoaded', () => {
  $B.countByN('selector-id', targetMoney, N, interval);
}
```

see [example source](https://github.com/JeHwanYoo/bill-counter-js/blob/master/examples/dollar.esm.html)

## Common JS

```
const { $B } = require('bill-counter-js');

$B.countByN('selector-id', targetMoney, N, interval);
```

## <a name="API"></a> API Documents

### 1. Count by N

```
$B.countByN(id, end, n, interval = 0.1);
```

Count the numbers by n.

Perhaps most similar to the counter.

### 2. Fast counting

```
$B.countFast(id, end, duration = 100);
```

Count any number in a certain amount of time.

I think it will be very effective as an animation.

### 3. Locale Setting (Formatting)

```
// default
$B.localeOptions = {
  format: true,
  locale: 'en-US',
  currency: 'USD',
}
```

- format: Do you format in currency? (true = yes)

- locale: What language do you speak? ([Learn More](https://www.science.co.il/language/Locale-codes.php))

- currency: What currency are you using? ([Learn More](https://www.currency-iso.org/en/home/tables/table-a1.html))

### 4. Define your formatter

The default formatter uses the ECMAScript Internationalization API. ([INTL](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)) If you don't like this, define your own formatter.

```
$B.formatStyler = (number) => {
  // your formatter!
}
```

If you want to change back to the default style,

run `$B.formatStyler = $B.defaultFormatStyler;`

## Library demo

Try the demo [here](https://jehwanyoo.github.io/bill-counter-js/examples/dollar.html).
