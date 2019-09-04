# rw-datepicker

[![Build Status](https://travis-ci.org/rw251/rw-datepicker.svg?branch=master)](https://travis-ci.org/rw251/rw-datepicker)
[![Coverage Status](https://coveralls.io/repos/github/rw251/rw-datepicker/badge.svg?branch=master)](https://coveralls.io/github/rw251/rw-datepicker?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/rw251/rw-datepicker/badge.svg)](https://snyk.io/test/github/rw251/rw-datepicker)

Minimalistic datepicker forked (nicked) from https://github.com/yogasaikrishna/foopicker


### Pure JavaScript Datepicker

* Lightweight (6.2KB minified)
* Zero dependencies

## Usage

```
npm install --save rw-datepicker
```

index.html
```html
<input type="text" id="datepicker">
```

script.js
```js
import {DatePicker} from 'rw-datepicker'
var myDatepicker = new DatePicker({
  id: 'datepicker'
});
```

