# strict-tslint-config

[![Package Version](https://img.shields.io/npm/v/strict-tslint-config.svg)](https://yarnpkg.com/en/package/strict-tslint-config)
[![Build Status](https://travis-ci.org/clebert/strict-tslint-config.svg?branch=master)](https://travis-ci.org/clebert/strict-tslint-config)

> An opinionated TSLint configuration preset. Works best together with strict
> TypeScript settings and Prettier.

**Note:** Please use [`ts-config`](https://github.com/clebert/ts-config/)
instead of this package.

## Getting started

First, install `strict-tslint-config` as a dev dependency:

```sh
yarn add -D strict-tslint-config
```

Then create a TSLint configuration file (`tslint.json`) like this:

```json
{
  "extends": "strict-tslint-config",
  "linterOptions": {
    "exclude": ["**/node_modules/**"]
  }
}
```

Now you can run TSLint as follows (assuming that TypeScript and Prettier are
configured accordingly):

```sh
# Lint your TS sources
yarn tslint --config tslint.json --project . '**/*.{ts,tsx}'

# Lint your JS sources
yarn tslint --config tslint.json '**/*.{js,jsx}'
```

## Configuration preset

This dynamically generated configuration preset is compatible to
[TSLint](https://palantir.github.io/tslint/) in version `^5.10.0`. It is based
on the built-in configuration preset `tslint:all`:

> **`tslint:all`** turns on all rules to their strictest settings. This will use
> type checking, so it must be combined with the `--project option`. (Exceptions
> include rules such as `"ban"`, `"import-blacklist"`, and `"file-header"`,
> which have no sensible defaults, and deprecated rules.)

It is assumed that [TypeScript](https://www.typescriptlang.org/) is configured
with strict settings, e.g.:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "module": "commonjs",
    "moduleResolution": "node",
    "declaration": true,
    "sourceMap": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

**Note:** You can use the `tsconfig.json` file of this package as a basis for
your project, e.g.:

```json
{
  "extends": "./node_modules/strict-tslint-config/tsconfig.json",
  "include": ["src/**/*.ts", "src/**/*.tsx", "typings/**/*.d.ts"],
  "compilerOptions": {
    "outDir": "dist/"
  }
}
```

Also, it is assumed that [Prettier](https://prettier.io/) is used for formatting
your sources.

The deviations from the configuration preset
[`tslint:all@5.11.0`](https://github.com/palantir/tslint/blob/5.11.0/src/configs/all.ts)
are documented below:

- [TypeScript and JavaScript rule overrides](#typescript-and-javascript-rule-overrides)
- [TypeScript-only rule overrides](#typescript-only-rule-overrides)
- [JavaScript-only rule overrides](#javascript-only-rule-overrides)

### TypeScript and JavaScript rule overrides

#### [align](https://palantir.github.io/tslint/rules/align/)

- Unnecessary because of Prettier.

```diff
{
-  align: [
-    true
-    "parameters"
-    "arguments"
-    "statements"
-    "elements"
-    "members"
-  ]
 }
```

#### [arrow-parens](https://palantir.github.io/tslint/rules/arrow-parens/)

- Unnecessary because of Prettier.

```diff
{
-  arrow-parens: true
 }
```

#### [comment-format](https://palantir.github.io/tslint/rules/comment-format/)

```diff
{
   comment-format: [
     true
     "check-space"
-    "check-uppercase"
   ]
 }
```

#### [file-name-casing](https://palantir.github.io/tslint/rules/file-name-casing/)

```diff
{
   file-name-casing: [
     true
-    "camel-case"
+    "kebab-case"
   ]
 }
```

#### [indent](https://palantir.github.io/tslint/rules/indent/)

- Unnecessary because of Prettier.

```diff
{
-  indent: [
-    true
-    "spaces"
-  ]
 }
```

#### [max-classes-per-file](https://palantir.github.io/tslint/rules/max-classes-per-file/)

```diff
{
-  max-classes-per-file: [
-    true
-    1
-  ]
 }
```

#### [max-file-line-count](https://palantir.github.io/tslint/rules/max-file-line-count/)

```diff
{
-  max-file-line-count: [
-    true
-    1000
-  ]
 }
```

#### [max-line-length](https://palantir.github.io/tslint/rules/max-line-length/)

- Unnecessary because of Prettier.

```diff
{
-  max-line-length: [
-    true
-    120
-  ]
 }
```

#### [member-ordering](https://palantir.github.io/tslint/rules/member-ordering/)

```diff
{
   member-ordering: [
     true
-    {
-      order: "statics-first"
-      alphabetize: true
-    }
+    {
+      order: "statics-first"
+    }
   ]
 }
```

#### [newline-per-chained-call](https://palantir.github.io/tslint/rules/newline-per-chained-call/)

- Unnecessary because of Prettier.

```diff
{
-  newline-per-chained-call: true
 }
```

#### [no-console](https://palantir.github.io/tslint/rules/no-console/)

```diff
{
-  no-console: true
 }
```

#### [no-empty](https://palantir.github.io/tslint/rules/no-empty/)

```diff
{
-  no-empty: true
+  no-empty: [
+    true
+    "allow-empty-catch"
+  ]
 }
```

#### [no-implicit-dependencies](https://palantir.github.io/tslint/rules/no-implicit-dependencies/)

```diff
{
-  no-implicit-dependencies: true
+  no-implicit-dependencies: [
+    true
+    "dev"
+  ]
 }
```

#### [no-magic-numbers](https://palantir.github.io/tslint/rules/no-magic-numbers/)

```diff
{
-  no-magic-numbers: true
 }
```

#### [no-null-keyword](https://palantir.github.io/tslint/rules/no-null-keyword/)

```diff
{
-  no-null-keyword: true
 }
```

#### [no-submodule-imports](https://palantir.github.io/tslint/rules/no-submodule-imports/)

```diff
{
-  no-submodule-imports: true
 }
```

#### [no-this-assignment](https://palantir.github.io/tslint/rules/no-this-assignment/)

```diff
{
-  no-this-assignment: true
+  no-this-assignment: [
+    true
+    {
+      allow-destructuring: true
+    }
+  ]
 }
```

#### [no-unnecessary-callback-wrapper](https://palantir.github.io/tslint/rules/no-unnecessary-callback-wrapper/)

```diff
{
-  no-unnecessary-callback-wrapper: true
 }
```

#### [no-unnecessary-class](https://palantir.github.io/tslint/rules/no-unnecessary-class/)

```diff
{
   no-unnecessary-class: [
     true
+    "allow-constructor-only"
     "allow-empty-class"
+    "allow-static-only"
   ]
 }
```

#### [object-literal-key-quotes](https://palantir.github.io/tslint/rules/object-literal-key-quotes/)

- Unnecessary because of Prettier.

```diff
{
-  object-literal-key-quotes: [
-    true
-    "consistent-as-needed"
-  ]
 }
```

#### [object-literal-sort-keys](https://palantir.github.io/tslint/rules/object-literal-sort-keys/)

```diff
{
-  object-literal-sort-keys: true
 }
```

#### [only-arrow-functions](https://palantir.github.io/tslint/rules/only-arrow-functions/)

```diff
{
-  only-arrow-functions: true
+  only-arrow-functions: [
+    true
+    "allow-declarations"
+  ]
 }
```

#### [ordered-imports](https://palantir.github.io/tslint/rules/ordered-imports/)

```diff
{
   ordered-imports: [
     true
-    {
-      import-sources-order: "case-insensitive"
-      named-imports-order: "case-insensitive"
-      module-source-path: "full"
-    }
+    {
+      import-sources-order: "lowercase-last"
+      named-imports-order: "lowercase-last"
+    }
   ]
 }
```

#### [prefer-template](https://palantir.github.io/tslint/rules/prefer-template/)

```diff
{
-  prefer-template: true
+  prefer-template: [
+    true
+    "allow-single-concat"
+  ]
 }
```

#### [quotemark](https://palantir.github.io/tslint/rules/quotemark/)

- Unnecessary because of Prettier.

```diff
{
-  quotemark: [
-    true
-    "double"
-    "avoid-escape"
-    "avoid-template"
-  ]
 }
```

#### [semicolon](https://palantir.github.io/tslint/rules/semicolon/)

- Unnecessary because of Prettier.

```diff
{
-  semicolon: [
-    true
-    "always"
-  ]
 }
```

#### [switch-default](https://palantir.github.io/tslint/rules/switch-default/)

- **TypeScript-only**: Unnecessary because of the TypeScript setting
  `--noImplicitReturns`.

```diff
{
-  switch-default: true
 }
```

#### [trailing-comma](https://palantir.github.io/tslint/rules/trailing-comma/)

- Unnecessary because of Prettier.

```diff
{
-  trailing-comma: [
-    true
-    {
-      multiline: "always"
-      singleline: "never"
-    }
-  ]
 }
```

#### [triple-equals](https://palantir.github.io/tslint/rules/triple-equals/)

```diff
{
-  triple-equals: true
+  triple-equals: [
+    true
+    "allow-null-check"
+  ]
 }
```

#### [variable-name](https://palantir.github.io/tslint/rules/variable-name/)

```diff
{
   variable-name: [
     true
     "ban-keywords"
     "check-format"
+    "allow-pascal-case"
+    "allow-leading-underscore"
   ]
 }
```

#### [whitespace](https://palantir.github.io/tslint/rules/whitespace/)

- Unnecessary because of Prettier.

```diff
{
-  whitespace: [
-    true
-    "check-branch"
-    "check-decl"
-    "check-operator"
-    "check-module"
-    "check-separator"
-    "check-type"
-    "check-typecast"
-    "check-preblock"
-    "check-type-operator"
-    "check-rest-spread"
-  ]
 }
```

### TypeScript-only rule overrides

#### [array-type](https://palantir.github.io/tslint/rules/array-type/)

```diff
{
   array-type: [
     true
-    "array-simple"
+    "array"
   ]
 }
```

#### [completed-docs](https://palantir.github.io/tslint/rules/completed-docs/)

```diff
{
-  completed-docs: true
 }
```

#### [interface-name](https://palantir.github.io/tslint/rules/interface-name/)

```diff
{
-  interface-name: true
+  interface-name: [
+    true
+    "never-prefix"
+  ]
 }
```

#### [no-empty-interface](https://palantir.github.io/tslint/rules/no-empty-interface/)

```diff
{
-  no-empty-interface: true
 }
```

#### [no-inferrable-types](https://palantir.github.io/tslint/rules/no-inferrable-types/)

```diff
{
   no-inferrable-types: [
     true
     "ignore-params"
+    "ignore-properties"
   ]
 }
```

#### [no-parameter-properties](https://palantir.github.io/tslint/rules/no-parameter-properties/)

```diff
{
-  no-parameter-properties: true
 }
```

#### [no-unbound-method](https://palantir.github.io/tslint/rules/no-unbound-method/)

```diff
{
-  no-unbound-method: true
+  no-unbound-method: [
+    true
+    "ignore-static"
+  ]
 }
```

#### [no-unsafe-any](https://palantir.github.io/tslint/rules/no-unsafe-any/)

```diff
{
-  no-unsafe-any: true
 }
```

#### [no-unused-variable](https://palantir.github.io/tslint/rules/no-unused-variable/)

- Deprecated since TypeScript 2.9. Please use the built-in compiler checks
  instead.

```diff
{
-  no-unused-variable: true
 }
```

#### [no-void-expression](https://palantir.github.io/tslint/rules/no-void-expression/)

```diff
{
-  no-void-expression: true
+  no-void-expression: [
+    true
+    "ignore-arrow-function-shorthand"
+  ]
 }
```

#### [return-undefined](https://palantir.github.io/tslint/rules/return-undefined/)

```diff
{
-  return-undefined: true
 }
```

#### [strict-boolean-expressions](https://palantir.github.io/tslint/rules/strict-boolean-expressions/)

```diff
{
-  strict-boolean-expressions: true
+  strict-boolean-expressions: [
+    "allow-null-union"
+    "allow-undefined-union"
+    "allow-string"
+    "allow-number"
+  ]
 }
```

#### [typedef](https://palantir.github.io/tslint/rules/typedef/)

```diff
{
   typedef: [
     true
     "call-signature"
-    "arrow-call-signature"
     "parameter"
-    "arrow-parameter"
     "property-declaration"
-    "variable-declaration"
-    "member-variable-declaration"
   ]
 }
```

### JavaScript-only rule overrides

#### [no-require-imports](https://palantir.github.io/tslint/rules/no-require-imports/)

```diff
{
-  no-require-imports: true
 }
```

#### [switch-default](https://palantir.github.io/tslint/rules/switch-default/)

- **TypeScript-only**: Unnecessary because of the TypeScript setting
  `--noImplicitReturns`.

```diff
{
+  switch-default: true
 }
```

---

Copyright (c) 2018-present, Clemens Akens. Released under the terms of the
[MIT License](https://github.com/clebert/strict-tslint-config/blob/master/LICENSE).
