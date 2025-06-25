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
import 'm-b-style';
```

### HTML
```html
<link rel="stylesheet" href="../dist/index.css" />
```

### LESS/SCSS
```less
@import '../index.css';
```

## 🚀 Usage

Once you've imported the CSS, you can use the utility classes:

### React
```js
export default function App() {
  return <div className="mb-f-jc-g4">Hello</div>;
}
```

### HTML
```html
<div class="mb-f-jc-g4">Hello</div>
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
| `g0`      | Gap 2px            | `gap: 0rem;`                    |
| `g1`      | Gap 4px            | `gap: 0.25rem;`                    |
| `g2`      | Gap 8px            | `gap: 0.5rem;`                    |
| `g3`     | Gap 16px           | `gap: 0.25rem;`                   |