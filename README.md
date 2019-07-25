# eslint-config-cheminfo

Shared ESLint config for cheminfo and ml.js projects.

## Installation

```console
npx install-peerdeps --dev eslint-config-cheminfo
```

## Usage

Create a `.eslintrc.yml` with the following contents:

```yml
extends: cheminfo
```

You can then customize the config for your project by changing rules in this file.

Create ESLint scripts in your `package.json`:

```json
{
  "scripts": {
    "eslint": "eslint src --cache",
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

```yml
extends:
  - cheminfo-typescript
  - cheminfo-react
```

## FAQ

### `jest/expect-expect` is flagging my test but I assert in an external function

See https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md#assertfunctionnames

You can override this by adding a comment like this at the top of your test file:

```js
/* eslint jest/expect-expect: ["error", { "assertFunctionNames": ["expect", "functionThatCallsExpect"] }] */
```
