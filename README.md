# rw-picker

[![Build Status](https://travis-ci.org/rw251/rw-picker.svg?branch=master)](https://travis-ci.org/rw251/rw-picker)
[![Coverage Status](https://coveralls.io/repos/github/rw251/rw-picker/badge.svg?branch=master)](https://coveralls.io/github/rw251/rw-picker?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/rw251/rw-picker/badge.svg)](https://snyk.io/test/github/rw251/rw-picker)

Minimalistic datepicker forked (nicked) from https://github.com/yogasaikrishna/foopicker


### Pure JavaScript Datepicker

* Lightweight (6.2KB minified)
* Zero dependencies

## Usage

```
npm install --save rw-picker
```

index.html
```html
<input type="text" id="datepicker">
```

script.js
```js
import {DatePicker} from 'rw-picker'
var myDatepicker = new DatePicker({
  id: 'datepicker'
});
```

