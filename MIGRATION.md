# Migration to flat config

Starting with version 11.0.0, this package exports the config in the new ESLint Flat Config format.
This document aims to help migrating from the previous configuration format.

See https://eslint.org/docs/latest/use/configure/migration-guide for a more in-depth guide.

## Extending base configs

All our base configs are flat configs themselves, meaning they are exported as arrays of configs.
To extend them, just spread the configs in yours.
Later config elements (in array order), override the previous ones.

```js
import cheminfo from 'eslint-config-cheminfo';

export default [
  ...cheminfo,
  {
    // Custom config for the project, overrides.
  },
];
```

> [!WARNING]  
> In previous versions, the default config `cheminfo` was the same as `cheminfo/base`.
> Now it exports the full config, including `jsdoc` and `unicorn`.
> If you don't want it, extend from the `base` config only: `import cheminfo from 'eslint-config-cheminfo/base';`.
> This is also the case for the `eslint-config-cheminfo-typescript` package.

## Only one config file

The main thing about Flat Config is that a project now has only one configuration file that is put at the top-level.
This file should be written in ESM and named `eslint.config.mjs` (`eslint.config.js` is possible if you are in a `"type": "module"` project).

When migrating, look for all `.eslintrc.*` file in your project and move their configs to the new file, then remove them. If you have a `.eslintignore` file,
it should also be moved to the flat config.

## How to migrate nested `.eslintrc.*` files?

Refs: [glob-based configs](https://eslint.org/docs/latest/use/configure/migration-guide#glob-based-configs).

In the old config format, a nested config file only applied to the directory where it was and its children.
When moving it to the flat config, use `files` patterns:

```js
export default [
  ...cheminfo,
  {
    files: ['scripts/**'],
    rules: {
      // Rules that only apply to the scripts directory.
    },
  },
];
```

## How migrate `.eslintignore`?

Refs: [ignoring files](https://eslint.org/docs/latest/use/configure/migration-guide#ignoring-files).

Add an object with an `ignores` field to the flat config.

```js
export default [
  {
    ignores: ['**/build', 'src/generated/**'],
  },
  ...cheminfo,
];
```

Be careful that the new `ignores` should be written with glob syntax (previously it was gitignore syntax).
The main difference is that to match directories or files at any depth, you need to have `**/` at the beginning of the pattern.

## What about the `env` field?

Refs: [configuring language options](https://eslint.org/docs/latest/use/configure/migration-guide#configuring-language-options).

Install and use the `globals` package:

```js
import globals from 'globals';

export default [
  ...cheminfo,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
];
```

## Examples

Here are some example configs that were already migrated in our open source projects:

- https://github.com/cheminfo/xps-analysis/blob/main/eslint.config.mjs
- https://github.com/cheminfo/mass-tools/blob/main/eslint.config.mjs
