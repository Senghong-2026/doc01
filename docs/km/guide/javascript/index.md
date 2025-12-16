# មេរៀន JavaScript

សូមស្វាគមន៍មកកាន់មេរៀន JavaScript ពេញលេញ! មគ្គុទ្ទេសក៍នេះនឹងនាំអ្នកពីកម្រិតដំបូងដល់កម្រិតខ្ពស់។

## តើ JavaScript ជាអ្វី?

JavaScript គឺជាភាសាសរសេរកម្មវិធីដែលអាចប្រើបានច្រើនយ៉ាង ដែលប្រើជាចម្បងសម្រាប់ការអភិវឌ្ឍន៍គេហទំព័រ។ វាអនុញ្ញាតឱ្យមានគេហទំព័រអន្តរកម្ម និងជាផ្នែកសំខាន់នៃកម្មវិធីគេហទំព័រ។

```js
console.log("សួស្តី JavaScript!");
```

## រចនាសម្ព័ន្ធមេរៀន

### កម្រិតដំបូង
- [មូលដ្ឋាន](/km/guide/javascript/01-basics) - អថេរ ប្រភេទទិន្នន័យ និងប្រមាណវិធី
- [លំហូរគ្រប់គ្រង](/km/guide/javascript/02-control-flow) - លក្ខខណ្ឌ និង Loops
- [អនុគមន៍](/km/guide/javascript/03-functions) - អនុគមន៍ និង Scope

### កម្រិតមធ្យម
- [អារេ](/km/guide/javascript/04-arrays) - អារេ និង Array Methods
- [វត្ថុ](/km/guide/javascript/05-objects) - វត្ថុ និង Object Methods
- [ការគ្រប់គ្រង DOM](/km/guide/javascript/06-dom) - ធ្វើការជាមួយ Document Object Model

### កម្រិតខ្ពស់
- [កម្មវិធី Async](/km/guide/javascript/07-async) - Promises Async/Await
- [មុខងារ ES6+](/km/guide/javascript/08-es6) - មុខងារ JavaScript ទំនើប
- [OOP](/km/guide/javascript/09-oop) - ការសរសេរកម្មវិធីតាមវត្ថុ
- [គំរូកម្រិតខ្ពស់](/km/guide/javascript/10-advanced) - គំរូរចនា និងការអនុវត្តល្អបំផុត

## តម្រូវការមុន

- ការយល់ដឹងមូលដ្ឋានអំពី HTML និង CSS
- កម្មវិធីកែសម្រួលកូដ (VS Code ត្រូវបានណែនាំ)
- កម្មវិធីរុករកគេហទំព័រជាមួយ developer tools

## ចាប់ផ្តើម

អ្នកអាចដំណើរការ JavaScript តាមវិធីជាច្រើន៖

### 1. Browser Console

បើក developer tools របស់កម្មវិធីរុករក (F12) ហើយប្រើ Console tab។

### 2. ឯកសារ HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Demo</title>
</head>
<body>
    <script>
        console.log("សួស្តីពី HTML!");
    </script>
</body>
</html>
```

### 3. Node.js

```bash
node script.js
```

## អថេរ

អថេរគឺជា containers សម្រាប់ផ្ទុកតម្លៃទិន្នន័យ។ JavaScript មានវិធីបីយ៉ាងដើម្បីប្រកាសអថេរ៖

### let (ទំនើប - អាចផ្លាស់ប្តូរបាន)

```js
let count = 0;
count = 1; // អាចផ្លាស់ប្តូរបាន
```

### const (ទំនើប - ថេរ)

```js
const PI = 3.14159;
// PI = 3; // កំហុស! មិនអាចផ្លាស់ប្តូរបានទេ
```

::: tip ការអនុវត្តល្អបំផុត
ប្រើ `const` ជាលំនាំដើម ហើយ `let` នៅពេលអ្នកត្រូវការផ្លាស់ប្តូរតម្លៃ។ ជៀសវាង `var` នៅក្នុង JavaScript ទំនើប។
:::

## ប្រភេទទិន្នន័យ

JavaScript មានប្រភេទទិន្នន័យ 8៖

```js
// String
let greeting = "សួស្តី ពិភពលោក!";

// Number
let age = 25;
let price = 99.99;

// Boolean
let isActive = true;

// Undefined
let notDefined;

// Null
let empty = null;

// Object
let person = {
    name: "សុខា",
    age: 30
};

// Array
let fruits = ["ផ្លែប៉ោម", "ចេក", "ក្រូច"];
```

## ប្រមាណវិធី

```js
// ប្រមាណវិធីគណិតវិទ្យា
let sum = 5 + 3;      // 8
let diff = 10 - 4;    // 6
let product = 3 * 4;  // 12
let quotient = 15 / 3; // 5

// ប្រមាណវិធីប្រៀបធៀប
console.log(5 > 3);   // true
console.log(5 === "5"); // false (strict equality)

// ប្រមាណវិធីឡូជីក
console.log(true && false); // false
console.log(true || false); // true
```

ចូរចាប់ផ្តើមដំណើរ JavaScript របស់អ្នក!
