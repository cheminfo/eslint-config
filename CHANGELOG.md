# Changelog

### [7.2.2](https://www.github.com/cheminfo/eslint-config/compare/v7.2.1...v7.2.2) (2022-01-24)


### Bug Fixes

* update eslint-plugin-jest to v26 ([d75a921](https://www.github.com/cheminfo/eslint-config/commit/d75a9218929b98bbe3efab70b9474ecd9fcfb132))

### [7.2.1](https://www.github.com/cheminfo/eslint-config/compare/v7.2.0...v7.2.1) (2021-11-05)


### Bug Fixes

* **jsdoc:** disable require-description-complete-sentence rule ([5db979d](https://www.github.com/cheminfo/eslint-config/commit/5db979d0e7544305df020376952846c173831cc9))

## [7.2.0](https://www.github.com/cheminfo/eslint-config/compare/v7.1.2...v7.2.0) (2021-11-04)


### Features

* **jsdoc:** allow up to two blank lines between jsdoc and function and do not check internal functions ([f1d2f1c](https://www.github.com/cheminfo/eslint-config/commit/f1d2f1c2323b4dc130f51e448ef6412bdc4c9c20))
* verify that functions always have a blank line before and after them ([d051ae0](https://www.github.com/cheminfo/eslint-config/commit/d051ae099b6beb6e7897f9d097f0ec2f24898948))

### [7.1.2](https://www.github.com/cheminfo/eslint-config/compare/v7.1.1...v7.1.2) (2021-10-23)


### Bug Fixes

* update eslint-plugin-jsdoc ([5a84920](https://www.github.com/cheminfo/eslint-config/commit/5a849205f4f95e4c5cb321d498d295a64b491854))

### [7.1.1](https://www.github.com/cheminfo/eslint-config/compare/v7.1.0...v7.1.1) (2021-10-15)


### Bug Fixes

* use temporary hack to install jsdoc plugin ([65a71da](https://www.github.com/cheminfo/eslint-config/commit/65a71da66bec39eecfbee418ca65b914cbb901bb))

## [7.1.0](https://www.github.com/cheminfo/eslint-config/compare/v7.0.0...v7.1.0) (2021-10-15)


### Features

* add jsdoc config ([475552e](https://www.github.com/cheminfo/eslint-config/commit/475552e7968e30f0c654982b7e0828c7a4f13b2f))

## [7.0.0](https://www.github.com/cheminfo/eslint-config/compare/v6.0.1...v7.0.0) (2021-10-15)


### ⚠ BREAKING CHANGES

* default sourceType to module and support .mjs and .cjs extensions
* update to ESLint v8

### Features

* allow empty functions in tests ([a53b330](https://www.github.com/cheminfo/eslint-config/commit/a53b3308f615683d07eea585b76edde194d018af))
* default sourceType to module and support .mjs and .cjs extensions ([f357169](https://www.github.com/cheminfo/eslint-config/commit/f357169e065ad308d0cb6187bd1bc2367891a6dd))
* support ecmaVersion 2022 ([f22dff0](https://www.github.com/cheminfo/eslint-config/commit/f22dff068ac481e09c19ba31edca10c99be0b1b7))
* update to ESLint v8 ([716eaab](https://www.github.com/cheminfo/eslint-config/commit/716eaab4c09eee9a7def59fd02e0d902d9de4204))

### [6.0.1](https://www.github.com/cheminfo/eslint-config/compare/v6.0.0...v6.0.1) (2021-10-12)


### Bug Fixes

* add node env to config files ([d21b0f9](https://www.github.com/cheminfo/eslint-config/commit/d21b0f9eec9f73e793212197e5f707ef6cf7a2f9))

## [6.0.0](https://www.github.com/cheminfo/eslint-config/compare/v5.6.0...v6.0.0) (2021-10-12)


### ⚠ BREAKING CHANGES

* By default, only globals shared between Node.js and browsers are enabled (except in Jest tests). To support Node.js globals everywhere as before, add `env: { node: true }` to your config.

### Features

* only support globals shared between node and browsers by default ([79581cd](https://www.github.com/cheminfo/eslint-config/commit/79581cd8a7872d22e4103afa569cef06f8495a68))


### Bug Fixes

* mark eslint plugins as peer dependencies ([a0682cb](https://www.github.com/cheminfo/eslint-config/commit/a0682cba1dd34d3fd35615f30ec2e5d420fd1589))
* update dependencies ([c22e944](https://www.github.com/cheminfo/eslint-config/commit/c22e944c753679d2f340f9ab9dba4efba1664acd))

## [5.6.0](https://www.github.com/cheminfo/eslint-config/compare/v5.5.0...v5.6.0) (2021-10-11)


### Features

* update eslint-plugin-jest ([35edc31](https://www.github.com/cheminfo/eslint-config/commit/35edc3185455da6fbc04b1dd96307ab2e2431a4a))

## [5.5.0](https://www.github.com/cheminfo/eslint-config/compare/v5.4.0...v5.5.0) (2021-09-08)


### Features

* add support for all ES2021 globals ([805bd82](https://www.github.com/cheminfo/eslint-config/commit/805bd821ffd5437d9248bc2b2cee3916911849ff))

## [5.4.0](https://www.github.com/cheminfo/eslint-config/compare/v5.3.0...v5.4.0) (2021-09-07)


### Features

* update dependencies to have BigInt64Array ([0cb305a](https://www.github.com/cheminfo/eslint-config/commit/0cb305a8c822d9f0db3a846386c5c244a75a52c5))

## [5.3.0](https://www.github.com/cheminfo/eslint-config/compare/v5.2.4...v5.3.0) (2021-08-31)


### Features

* enable func-names rule ([3b90379](https://www.github.com/cheminfo/eslint-config/commit/3b90379fde66e7d5fa8ff07ee7d93f5a1c49dd4e))

### [5.2.4](https://www.github.com/cheminfo/eslint-config/compare/v5.2.3...v5.2.4) (2021-05-10)


### Bug Fixes

* remove Prettier ([d50484f](https://www.github.com/cheminfo/eslint-config/commit/d50484f2e4e99ea40db396b6637984bba52afac8))

### [5.2.3](https://github.com/cheminfo/eslint-config/compare/v5.2.2...v5.2.3) (2021-02-23)

## [5.2.2](https://github.com/cheminfo/eslint-config/compare/v5.2.1...v5.2.2) (2020-10-07)


### Bug Fixes

* disable jest/expect-expect rule ([b7b2242](https://github.com/cheminfo/eslint-config/commit/b7b2242dc96867ed7f399e6e511ce94104317221))



## [5.2.1](https://github.com/cheminfo/eslint-config/compare/v5.2.0...v5.2.1) (2020-10-05)


### Bug Fixes

* disable no-void rule ([090f79a](https://github.com/cheminfo/eslint-config/commit/090f79a37de4971207abd3366f9a40f1a462826d))



# [5.2.0](https://github.com/cheminfo/eslint-config/compare/v5.1.3...v5.2.0) (2020-09-22)


### Bug Fixes

* disable no-await-in-loop ([075e0f1](https://github.com/cheminfo/eslint-config/commit/075e0f1fd0fd8e2efdc18f93099f105314fb5cf4))
* disable no-useless-constructor rule ([24af921](https://github.com/cheminfo/eslint-config/commit/24af921d73cccfcf43079e35bc1f15497ca70c91))


### Features

* add default-case-last rule ([ff93b88](https://github.com/cheminfo/eslint-config/commit/ff93b88602dce4dfb87957220e72764d192f3d9b))
* add default-param-last rule ([2652bbe](https://github.com/cheminfo/eslint-config/commit/2652bbe2231c2df1d800f58af1269591d6894d6b))
* add grouped-accessor-pairs rule ([b7d1596](https://github.com/cheminfo/eslint-config/commit/b7d15962dc2db181eaf32808f7c81dac1998fba7))
* add no-constructor-return rule (warn) ([0d202f6](https://github.com/cheminfo/eslint-config/commit/0d202f6539b60d3b8fa80be333dcd251890c12c1))
* add no-dupe-else-if rule ([57c33f2](https://github.com/cheminfo/eslint-config/commit/57c33f234cc8f40abba0b9d37765f9eaa0363b3a))
* add no-unreachable-loop rule ([a578da4](https://github.com/cheminfo/eslint-config/commit/a578da4f959c655b65e06f7690098cf1e381bf00))
* add no-useless-backreference rule ([7bf84ed](https://github.com/cheminfo/eslint-config/commit/7bf84edb6700f35fe2f0ff041108d0d744f0d4a9))
* add prefer-regex-literals rule ([3219fe9](https://github.com/cheminfo/eslint-config/commit/3219fe9ff41d63a70c6ccc8a947cbd403da22705))
* enable no-loss-of-precision rule ([15b1e49](https://github.com/cheminfo/eslint-config/commit/15b1e49199b9e64d2778e21665c6410922a0794b))
* enable no-promise-executor-return rule ([c9e67b9](https://github.com/cheminfo/eslint-config/commit/c9e67b9d3c0f0e313a0c811117cea707b10ccdef))
* enable no-setter-return rule ([5705be0](https://github.com/cheminfo/eslint-config/commit/5705be0f2646d6ed54cf5c1e7b702b06ebb37a2d))
* support ecmaVersion 2021 ([56277ad](https://github.com/cheminfo/eslint-config/commit/56277ad76836d8c15aaf6177338227e93c4cdf9b))



## [5.1.3](https://github.com/cheminfo/eslint-config/compare/v5.1.2...v5.1.3) (2020-09-08)


### Bug Fixes

* use endOfLine: auto in Prettier config ([8a1d512](https://github.com/cheminfo/eslint-config/commit/8a1d512683a50f4068b274ca42c9651c8342b938))



## [5.1.2](https://github.com/cheminfo/eslint-config/compare/v5.1.1...v5.1.2) (2020-09-04)



## [5.1.1](https://github.com/cheminfo/eslint-config/compare/v5.1.0...v5.1.1) (2020-08-17)


### Bug Fixes

* disable import/no-cycle rule ([f132ef7](https://github.com/cheminfo/eslint-config/commit/f132ef7cea874c6a0a870f82b3049d7280f84269))



# [5.1.0](https://github.com/cheminfo/eslint-config/compare/v5.0.0...v5.1.0) (2020-08-17)


### Bug Fixes

* disable no-shadow rule ([2eb4aa8](https://github.com/cheminfo/eslint-config/commit/2eb4aa8bf367ec743f06ae464be826e93d86d108))


### Features

* enable reportUnusedDisableDirectives ([4eceed7](https://github.com/cheminfo/eslint-config/commit/4eceed7410a17af2f6f89f0ecc433117a8770114))



# [5.0.0](https://github.com/cheminfo/eslint-config/compare/v4.1.0...v5.0.0) (2020-07-28)



# [4.1.0](https://github.com/cheminfo/eslint-config/compare/v4.0.0...v4.1.0) (2020-07-16)


### Features

* enable es2020 and move unassigned-import config from react ([51a641f](https://github.com/cheminfo/eslint-config/commit/51a641f16c496c64b64976b8a7fe08e4a71d4f5c))



# [4.0.0](https://github.com/cheminfo/eslint-config/compare/v3.0.0...v4.0.0) (2020-05-25)



# [3.0.0](https://github.com/cheminfo/eslint-config/compare/v2.0.5...v3.0.0) (2020-03-27)


### Features

* force imports to be alphabetized ([38a6ab1](https://github.com/cheminfo/eslint-config/commit/38a6ab101191478d90ab1f5dc2142ce277cf77a5))


### BREAKING CHANGES

* imports must now be alphabetized in each group



## [2.0.5](https://github.com/cheminfo/eslint-config/compare/v2.0.4...v2.0.5) (2020-03-27)



## [2.0.4](https://github.com/cheminfo/eslint-config/compare/v2.0.3...v2.0.4) (2019-11-04)


### Bug Fixes

* update jest plugin to latest version ([3a4193e](https://github.com/cheminfo/eslint-config/commit/3a4193edadfb4477013151466a0d9b5d90ba69a7))



## [2.0.3](https://github.com/cheminfo/eslint-config/compare/v2.0.2...v2.0.3) (2019-07-26)


### Bug Fixes

* disable bogus require-atomic-updates rule ([9bfb504](https://github.com/cheminfo/eslint-config/commit/9bfb504))



## [2.0.2](https://github.com/cheminfo/eslint-config/compare/v2.0.1...v2.0.2) (2019-07-24)


### Bug Fixes

* add eslint-config-prettier to dependencies ([ea0252e](https://github.com/cheminfo/eslint-config/commit/ea0252e))
* allow camelCase in destructuring ([6c5cd8a](https://github.com/cheminfo/eslint-config/commit/6c5cd8a))



## [2.0.1](https://github.com/cheminfo/eslint-config/compare/v2.0.0...v2.0.1) (2019-07-24)


### Bug Fixes

* add Prettier config ([c46e48a](https://github.com/cheminfo/eslint-config/commit/c46e48a))



# [2.0.0](https://github.com/cheminfo/eslint-config/compare/v1.20.1...v2.0.0) (2019-07-24)



## [1.20.1](https://github.com/cheminfo/eslint-config/compare/v1.20.0...v1.20.1) (2019-03-26)


### Bug Fixes

* forward support for Jest files in TypeScript ([2e54e01](https://github.com/cheminfo/eslint-config/commit/2e54e01))



# [1.20.0](https://github.com/cheminfo/eslint-config/compare/v1.19.1...v1.20.0) (2018-12-23)


### Features

* add no-useless-catch rule ([53e85fb](https://github.com/cheminfo/eslint-config/commit/53e85fb))



## [1.19.1](https://github.com/cheminfo/eslint-config/compare/v1.19.0...v1.19.1) (2018-12-11)


### Bug Fixes

* disable require-unicode-regexp ([e0a5016](https://github.com/cheminfo/eslint-config/commit/e0a5016))



# [1.19.0](https://github.com/cheminfo/eslint-config/compare/v1.18.0...v1.19.0) (2018-12-11)


### Features

* add rules introduced in ESLint 5.3.0 ([d8075a9](https://github.com/cheminfo/eslint-config/commit/d8075a9))
* update import rules ([ec15d0e](https://github.com/cheminfo/eslint-config/commit/ec15d0e))
* update jest rules ([b224941](https://github.com/cheminfo/eslint-config/commit/b224941))



<a name="1.18.0"></a>
# [1.18.0](https://github.com/cheminfo/eslint-config/compare/v1.17.4...v1.18.0) (2018-06-26)


### Features

* upgrade to ESLint 5 and switch ecmaVersion to 2018 ([54afe77](https://github.com/cheminfo/eslint-config/commit/54afe77))



<a name="1.17.4"></a>
## [1.17.4](https://github.com/cheminfo/eslint-config/compare/v1.17.3...v1.17.4) (2018-05-15)


### Bug Fixes

* add node-report to allow unassigned imports ([4f5628f](https://github.com/cheminfo/eslint-config/commit/4f5628f))



<a name="1.17.3"></a>
## [1.17.3](https://github.com/cheminfo/eslint-config/compare/v1.17.2...v1.17.3) (2018-04-13)


### Bug Fixes

* do not warn unassigned import for make-promises-safe ([55f5f56](https://github.com/cheminfo/eslint-config/commit/55f5f56))



<a name="1.17.2"></a>
## [1.17.2](https://github.com/cheminfo/eslint-config/compare/v1.17.1...v1.17.2) (2018-03-07)


### Bug Fixes

* disable require-await ([0797901](https://github.com/cheminfo/eslint-config/commit/0797901))



<a name="1.17.1"></a>
## [1.17.1](https://github.com/cheminfo/eslint-config/compare/v1.17.0...v1.17.1) (2018-03-02)


### Bug Fixes

* disable callback-return rule ([02de66f](https://github.com/cheminfo/eslint-config/commit/02de66f))



<a name="1.17.0"></a>
# [1.17.0](https://github.com/cheminfo/eslint-config/compare/v1.16.1...v1.17.0) (2018-02-22)


### Features

* add more stylistic rules ([4049614](https://github.com/cheminfo/eslint-config/commit/4049614))



<a name="1.16.1"></a>
## [1.16.1](https://github.com/cheminfo/eslint-config/compare/v1.16.0...v1.16.1) (2018-02-22)


### Bug Fixes

* disable no-undefined ([40d0215](https://github.com/cheminfo/eslint-config/commit/40d0215))



<a name="1.16.0"></a>
# [1.16.0](https://github.com/cheminfo/eslint-config/compare/v1.15.1...v1.16.0) (2018-02-22)


### Features

* add import/no-self-import rule ([c339efe](https://github.com/cheminfo/eslint-config/commit/c339efe))
* set all Variables and Node.js rules ([2093207](https://github.com/cheminfo/eslint-config/commit/2093207))



<a name="1.15.1"></a>
## [1.15.1](https://github.com/cheminfo/eslint-config/compare/v1.15.0...v1.15.1) (2018-01-30)


### Bug Fixes

* disable inexistent rule ([c4fb9eb](https://github.com/cheminfo/eslint-config/commit/c4fb9eb))



<a name="1.15.0"></a>
# [1.15.0](https://github.com/cheminfo/eslint-config/compare/v1.14.1...v1.15.0) (2018-01-30)


### Features

* add import plugin and rules ([50984a1](https://github.com/cheminfo/eslint-config/commit/50984a1))



<a name="1.14.1"></a>
## [1.14.1](https://github.com/cheminfo/eslint-config/compare/v1.14.0...v1.14.1) (2018-01-23)



<a name="1.14.0"></a>
# [1.14.0](https://github.com/cheminfo/eslint-config/compare/v1.13.0...v1.14.0) (2018-01-18)


### Features

* switch indent rule to two spaces ([#7](https://github.com/cheminfo/eslint-config/issues/7)) ([272378b](https://github.com/cheminfo/eslint-config/commit/272378b))



<a name="1.13.0"></a>
# [1.13.0](https://github.com/cheminfo/eslint-config/compare/v1.12.0...v1.13.0) (2018-01-17)


### Features

* **jest:** add valid-expect-in-promise ([bbd71a4](https://github.com/cheminfo/eslint-config/commit/bbd71a4))



<a name="1.12.0"></a>
# [1.12.0](https://github.com/cheminfo/eslint-config/compare/v1.11.0...v1.12.0) (2018-01-10)


### Features

* support jest test directories ([32f7400](https://github.com/cheminfo/eslint-config/commit/32f7400))



<a name="1.11.0"></a>
# [1.11.0](https://github.com/cheminfo/eslint-config/compare/v1.10.0...v1.11.0) (2018-01-09)


### Features

* set ES6 rules ([b8f8bbe](https://github.com/cheminfo/eslint-config/commit/b8f8bbe))



<a name="1.10.0"></a>
# [1.10.0](https://github.com/cheminfo/eslint-config/compare/v1.9.1...v1.10.0) (2018-01-09)


### Features

* use jest plugin ([0b517c1](https://github.com/cheminfo/eslint-config/commit/0b517c1)), closes [#6](https://github.com/cheminfo/eslint-config/issues/6)



<a name="1.9.1"></a>
## [1.9.1](https://github.com/cheminfo/eslint-config/compare/v1.9.0...v1.9.1) (2017-12-06)


### Bug Fixes

* wrap iife inside ([4dab480](https://github.com/cheminfo/eslint-config/commit/4dab480))



<a name="1.9.0"></a>
# [1.9.0](https://github.com/cheminfo/eslint-config/compare/v1.8.0...v1.9.0) (2017-12-06)


### Features

* add new rules for best practices ([ae3237c](https://github.com/cheminfo/eslint-config/commit/ae3237c))
* add new rules for possible errors ([1b589e8](https://github.com/cheminfo/eslint-config/commit/1b589e8))



<a name="1.8.0"></a>
# [1.8.0](https://github.com/cheminfo/eslint-config/compare/v1.7.0...v1.8.0) (2017-05-11)


### Features

* add new rules ([34bddc6](https://github.com/cheminfo/eslint-config/commit/34bddc6))



<a name="1.7.0"></a>
# [1.7.0](https://github.com/cheminfo/eslint-config/compare/v1.6.0...v1.7.0) (2017-03-10)


### Features

* allow ES2017 ([24f8ddd](https://github.com/cheminfo/eslint-config/commit/24f8ddd))



<a name="1.6.0"></a>
# [1.6.0](https://github.com/cheminfo/eslint-config/compare/v1.5.4...v1.6.0) (2016-12-08)


### Features

* add a few more rules ([a120175](https://github.com/cheminfo/eslint-config/commit/a120175))



<a name="1.5.4"></a>
## [1.5.4](https://github.com/cheminfo/eslint-config/compare/v1.5.3...v1.5.4) (2016-12-08)



<a name="1.5.3"></a>
## [1.5.3](https://github.com/cheminfo/eslint-config/compare/v1.5.2...v1.5.3) (2016-11-14)



<a name="1.5.2"></a>
## [1.5.2](https://github.com/cheminfo/eslint-config/compare/v1.5.1...v1.5.2) (2016-10-17)


### Bug Fixes

* add function to jsdoc consistency ([7f6a65f](https://github.com/cheminfo/eslint-config/commit/7f6a65f))



<a name="1.5.1"></a>
## [1.5.1](https://github.com/cheminfo/eslint-config/compare/v1.5.0...v1.5.1) (2016-10-17)


### Bug Fixes

* no-prototype-builtins ([8438472](https://github.com/cheminfo/eslint-config/commit/8438472))



<a name="1.5.0"></a>
# [1.5.0](https://github.com/cheminfo/eslint-config/compare/v1.4.0...v1.5.0) (2016-10-17)


### Features

* add some best practices ([558b339](https://github.com/cheminfo/eslint-config/commit/558b339))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/cheminfo/eslint-config/compare/v1.3.2...v1.4.0) (2016-10-14)


### Features

* add some new rules ([cf4db0b](https://github.com/cheminfo/eslint-config/commit/cf4db0b))



<a name="1.3.2"></a>
## [1.3.2](https://github.com/cheminfo/eslint-config/compare/v1.3.1...v1.3.2) (2016-10-12)



<a name="1.3.1"></a>
## [1.3.1](https://github.com/cheminfo/eslint-config/compare/v1.3.0...v1.3.1) (2016-10-11)


### Bug Fixes

* array-bracket-spacing should be never ([655441e](https://github.com/cheminfo/eslint-config/commit/655441e))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/cheminfo/eslint-config/compare/v1.2.1...v1.3.0) (2016-10-11)


### Features

* add many rules ([b579693](https://github.com/cheminfo/eslint-config/commit/b579693))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/cheminfo/eslint-config/compare/v1.2.0...v1.2.1) (2016-09-14)



<a name="1.2.0"></a>
# [1.2.0](https://github.com/cheminfo/eslint-config/compare/v1.1.2...v1.2.0) (2016-09-05)


### Features

* add strict rule ([525a9cf](https://github.com/cheminfo/eslint-config/commit/525a9cf))



<a name="1.1.2"></a>
## [1.1.2](https://github.com/cheminfo/eslint-config/compare/v1.1.1...v1.1.2) (2016-07-26)


### Bug Fixes

* use peer dependencies ([a9667cd](https://github.com/cheminfo/eslint-config/commit/a9667cd))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/cheminfo/eslint-config/compare/v1.1.0...v1.1.1) (2016-07-26)


### Bug Fixes

* put allow-null in correct rule ([01a5b8a](https://github.com/cheminfo/eslint-config/commit/01a5b8a))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/cheminfo/eslint-config/compare/v1.0.0...v1.1.0) (2016-07-26)


### Features

* add no-only-tests rule ([20ef906](https://github.com/cheminfo/eslint-config/commit/20ef906))
* add some rules from roc ([f76b046](https://github.com/cheminfo/eslint-config/commit/f76b046))



<a name="1.0.0"></a>
# 1.0.0 (2016-07-18)


### Features

* first release ([8d2936b](https://github.com/cheminfo/eslint-config/commit/8d2936b))
