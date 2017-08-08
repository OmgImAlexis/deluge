# deluge [![Build Status](https://travis-ci.org/omgimalexis/deluge.svg?branch=master)](https://travis-ci.org/omgimalexis/deluge) [![Coverage Status](https://coveralls.io/repos/github/omgimalexis/deluge/badge.svg?branch=master)](https://coveralls.io/github/omgimalexis/deluge?branch=master)

> A wrapper for the Deluge API


## Install

```
$ yarn add deluge
```


## Usage

```js
import deluge from 'deluge';

deluge('unicorns');
//=> 'unicorns & rainbows'
```


## API

### deluge(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ yarn global add deluge
```

```
$ deluge --help

  Usage
    deluge [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ deluge
    unicorns & rainbows
    $ deluge ponies
    ponies & rainbows
```


## License

MIT © [Alexis Tyler](https://github.com/omgimalexis/deluge)
