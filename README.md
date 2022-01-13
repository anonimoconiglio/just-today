# Just-Today

A simple helper to get the numeric value of the actual day, month or year.  
Disclaimer: this package has been done for learning purposes.

## How to use it

Simply import the library and ask for named imports as `day`, `month` or `year`. You'll obtain their actual numeric values (at the time the script will be running).

```js
import { month, day, year } from 'just-today'

console.log(`Today is ${day}/${month}/${year}`)
```

You can also obtain a more verbose and formated value providing a specific locale to the function `dayMonthVerbose`:

```js
import { dayMonthVerbose } from 'just-today'

let dayMonthUSA = dayMonthVerbose('en-US')
let dayMonthITA = dayMonthVerbose('it-IT')

console.log(dayMonthUSA) // January 15

console.log(dayMonthITA) // 15 gennaio
```
