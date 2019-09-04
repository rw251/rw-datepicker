const { expect } = require('chai');
require('jsdom-global')();
const { DatePicker } = require('../index');

const pickerId = 'rwp';

describe('#rw-picker', () => {
  afterEach(() => {
    const el = document.getElementById(pickerId);
    if (el) el.parentNode.removeChild(el);

    document.querySelectorAll('html').className = '';
  });
});
