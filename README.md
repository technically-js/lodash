# @technically/lodash

Technically this is an ESM/CommonJS wrapper around lodash

## Why?

This is a "temporary" workaround until `lodash-es` will be merged into `lodash`.

See https://github.com/lodash/lodash/issues/5107

This package relies on [conditional exports](https://nodejs.org/api/packages.html#conditional-exports) 
to provide the right lodash dependency based on the way it was required (`require` or `import`): 

- Uses `require('lodash')` for CommonJS require calls
- Uses `export * from 'lodash-es'` for ESM import calls

This is especially useful for dual packages that are available as ESM and CommonJS builds simultaneously.
This way you only need one dependency and one simple import call. The rest will be done by the bundler.

You also don't need a separate `@types/lodash` dependency, as it's already included via this package dependencies 
and is proxy-exported as the package types. Enjoy! :cocktail:

## Usage

1. Install `@technically/lodash` to your project
2. Import or require it the usual way and use it like lodash:

   For CommonJS code:

   ```js
   const { isEqual } = require('@technically/lodash');
   
   console.log(isEqual({ a: 1, b: 2 }, { b: 2, a: 1 }));
   ```
   
   For ESM code:

   ```js
   import { isEqual } from '@technically/lodash';
   
   console.log(isEqual({ a: 1, b: 2 }, { b: 2, a: 1 }));
   ```


## Function reference

See official Lodash documentation at: https://lodash.com/.


## Versioning 

Both `lodash` and `lodash-es` are required as `^X.Y.0` using the same semver specifier.

The `@technically/lodash` package version is always based on the `X` and `Y` values as following: `X.Y.{patch}`.


## License

[MIT](./LICENSE)


## Author

Initially implemented by Ivan Voskoboinyk 
