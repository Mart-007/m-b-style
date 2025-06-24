# m-b-style

<!-- I made this for fun :) -->

A CSS utility class library using shorthand like `mb-f-jc-g2` to simplify styling in React or HTML.

## Installation

```bash
npm install m-b-style
```

## Setup

First, import the CSS file in your project:

### React
```js
import 'm-b-style/dist/m-b-style.css';
```

### HTML
```html
<link rel="stylesheet" href="./node_modules/m-b-style/dist/m-b-style.css" />
```

### LESS/SCSS
```less
@import 'm-b-style/dist/m-b-style.css';
```

## 🚀 Usage

Once you've imported the CSS, you can use the utility classes:

### React
```js
export default function App() {
  return <div className="mb-f-jc-aic-g4">Hello</div>;
}
```

### HTML
```html
<div class="mb-f-jc-aic-g4">Hello</div>
```

### LESS/SCSS
```less
.wrapper {
  .mb-f-jc-aic-g4();
}
```

## Supported Shorthands

| Shorthand | Description        | CSS Output                     |
| --------- | ------------------ | ------------------------------ |
| `f`       | Flex display       | `display: flex;`               |
| `c`       | Contents display   | `display: contents;`           |
| `tc`      | Text center        | `text-align: center;`          |
| `jc`      | Justify center     | `justify-content: center;`     |
| `jfs`     | Justify flex-start | `justify-content: flex-start;` |
| `jfe`     | Justify flex-end   | `justify-content: flex-end;`   |
| `aic`     | Align items center | `align-items: center;`         |
| `g2`      | Gap 2px            | `gap: 2px;`                    |
| `g4`      | Gap 4px            | `gap: 4px;`                    |
| `g8`      | Gap 8px            | `gap: 8px;`                    |
| `g16`     | Gap 16px           | `gap: 16px;`                   |