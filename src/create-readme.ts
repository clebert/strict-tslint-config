import {writeFileSync} from 'fs';
import {format} from 'prettier';
import {jsRules, rules} from '.';
import {RuleName, allRules, prettierRules} from './rules';
import {renderRule} from './utils';

const rationales: {[ruleName in RuleName]?: string[]} = {
  'no-unused-variable': [
    'Deprecated since TypeScript 2.9. Please use the built-in compiler checks instead.'
  ],
  'switch-default': [
    '**TypeScript-only**: Unnecessary because of the TypeScript setting `--noImplicitReturns`.'
  ]
};

for (const ruleName of Object.keys(prettierRules) as RuleName[]) {
  rationales[ruleName] = [
    ...(rationales[ruleName] || []),
    'Unnecessary because of Prettier.'
  ];
}

// tslint:disable-next-line:no-require-imports no-var-requires
const packageName = require('../package.json').name;

// tslint:disable-next-line:no-require-imports no-var-requires
const tsLintVersion = require('tslint/package.json').version;

const readme = `
# ${packageName}

[![Package Version](https://img.shields.io/npm/v/${packageName}.svg)](https://yarnpkg.com/en/package/${packageName})
[![Build Status](https://travis-ci.org/clebert/${packageName}.svg?branch=master)](https://travis-ci.org/clebert/${packageName})

> An opinionated TSLint configuration preset. Works best together with strict
> TypeScript settings and Prettier.

## Getting started

First, install \`${packageName}\` as a dev dependency:

\`\`\`sh
yarn add -D ${packageName}
\`\`\`

Then create a TSLint configuration file (\`tslint.json\`) like this:

\`\`\`json
{
  "extends": "strict-tslint-config",
  "linterOptions": {
    "exclude": ["**/node_modules/**"]
  }
}
\`\`\`

Now you can run TSLint as follows (assuming that TypeScript and Prettier are
configured accordingly):

\`\`\`sh
# Lint your TS sources
yarn tslint --config tslint.json --project . '**/*.{ts,tsx}'

# Lint your JS sources
yarn tslint --config tslint.json '**/*.js'
\`\`\`

## Configuration preset

This dynamically generated configuration preset is compatible to
[TSLint](https://palantir.github.io/tslint/) in version \`^5.10.0\`. It is based
on the built-in configuration preset \`tslint:all\`:

> **\`tslint:all\`** turns on all rules to their strictest settings. This will
> use type checking, so it must be combined with the \`--project option\`.
> (Exceptions include rules such as \`"ban"\`, \`"import-blacklist"\`, and
> \`"file-header"\`, which have no sensible defaults, and deprecated rules.)

It is assumed that [TypeScript](https://www.typescriptlang.org/) is configured
with strict settings, e.g.:

\`\`\`json
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
\`\`\`

Also, it is assumed that [Prettier](https://prettier.io/) is used for formatting
your sources.

The deviations from the configuration preset [\`tslint:all@${tsLintVersion}\`](https://github.com/palantir/tslint/blob/${tsLintVersion}/src/configs/all.ts)
are documented below:

- [TypeScript and JavaScript rule overrides](#typescript-and-javascript-rule-overrides)
- [TypeScript-only rule overrides](#typescript-only-rule-overrides)
- [JavaScript-only rule overrides](#javascript-only-rule-overrides)

### TypeScript and JavaScript rule overrides

${(Object.keys(rules) as RuleName[])
  .sort()
  .filter(ruleName => ruleName in jsRules)
  .map(ruleName => renderRule(ruleName, allRules, rules, rationales[ruleName]))
  .filter(Boolean)
  .join('\n\n')}

### TypeScript-only rule overrides

${(Object.keys(rules) as RuleName[])
  .sort()
  .filter(ruleName => !(ruleName in jsRules))
  .map(ruleName => renderRule(ruleName, allRules, rules, rationales[ruleName]))
  .filter(Boolean)
  .join('\n\n')}

### JavaScript-only rule overrides

${(Object.keys(jsRules) as RuleName[])
  .sort()
  .map(ruleName => renderRule(ruleName, rules, jsRules, rationales[ruleName]))
  .filter(Boolean)
  .join('\n\n')}

---

Copyright (c) 2018-present, Clemens Akens. Released under the terms of the
[MIT License](https://github.com/clebert/${packageName}/blob/master/LICENSE).
`.trimLeft();

const formattedReadme = format(readme, {
  parser: 'markdown',
  proseWrap: 'always'
});

writeFileSync('README.md', formattedReadme, {encoding: 'utf8'});
