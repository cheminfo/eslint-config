# eslint-config-cheminfo

Shared ESLint config for cheminfo and ml.js projects.

> [!IMPORTANT]  
> Configs now require to use the ESLint Flat Config format.
> See the [migration guide](https://github.com/cheminfo/eslint-config/blob/main/MIGRATION.md) for more information.

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

To extend both the TypeScript and React configs, use the following template:

```js
import typescript from 'eslint-config-cheminfo-typescript';
import react from 'eslint-config-cheminfo-react/base';

export default [
  ...typescript,
  ...react,
];
```
