# eslint-config-cheminfo

Shared ESLint config for cheminfo and ml.js projects.

## Installation

```console
npm i -D eslint-config-cheminfo eslint@^8.57.0
```

## Usage

Create a `eslint.config.mjs` file with the following contents:

```js
import cheminfo from 'eslint-config-cheminfo';

export default [
  ...cheminfo,
];
```

You can then customize the config for your project.

Create ESLint scripts in your `package.json`:

```json
{
  "scripts": {
    "eslint": "eslint src",
    "eslint-fix": "npm run eslint -- --fix"
  }
}
```

## Extensions of this config

### TypeScript

https://github.com/cheminfo/eslint-config-cheminfo-typescript

## React

https://github.com/cheminfo/eslint-config-cheminfo-react

## TypeScript and React

You can extend both of the above configurations as they are compatible between each other:

```js
import typescript from 'eslint-config-cheminfo-typescript';
import react from 'eslint-config-cheminfo-react';

export default [
  ...typescript,
  ...react,
];
```
