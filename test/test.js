const { expect } = require('chai');
require('jsdom-global')();
const { DatePicker } = require('../index');

const pickerId = 'datepicker';
const today = new Date();
const todayAsISODate = today.toISOString().substr(0, 10);

describe('#rw-picker', () => {
  beforeEach(() => {
    document.body.innerHTML = `<input type="text" id="${pickerId}" />`;
  });

  describe('datepicker', () => {
    it('must initialise', () => {
      DatePicker({ id: pickerId });
      const picker = document.getElementById(`rw-picker-${pickerId}`);
      expect(picker).to.not.equal(null);
      expect(picker.childNodes.length).to.equal(0);
      expect(picker.nodeName.toLowerCase()).to.equal('div');
    });

    it('must open on field click', () => {
      DatePicker({ id: pickerId });
      const pickerField = document.getElementById(pickerId);
      pickerField.click();
      const picker = document.getElementById(`rw-picker-${pickerId}`);
      expect(picker).to.not.equal(null);
      expect(picker.childNodes.length).to.equal(1);
      expect(picker.style.position).to.equal('fixed');
    });
  });

  describe('.ISOValue', () => {
    it('works for today as default', () => {
      const dp = DatePicker({ id: pickerId });
      expect(dp.ISOValue).to.equal(todayAsISODate);
    });
  });

  describe('date formats', () => {
    it('does dd-MM-yyyy', () => {
      const pickerField = document.getElementById(pickerId);
      pickerField.value = '02-03-1986';
      const dp = DatePicker({ id: pickerId, dateFormat: 'dd-MM-yyyy' });
      expect(dp.ISOValue).to.equal('1986-03-02');
    });
    it('does dd/MM/yyyy', () => {
      const pickerField = document.getElementById(pickerId);
      pickerField.value = '02/03/1986';
      const dp = DatePicker({ id: pickerId, dateFormat: 'dd/MM/yyyy' });
      expect(dp.ISOValue).to.equal('1986-03-02');
    });
    it('does dd MMM yyyy', () => {
      const pickerField = document.getElementById(pickerId);
      pickerField.value = '02 Mar 1986';
      const dp = DatePicker({ id: pickerId, dateFormat: 'dd MMM yyyy' });
      expect(dp.ISOValue).to.equal('1986-03-02');
    });
    it('does MM-dd-yyyy', () => {
      const pickerField = document.getElementById(pickerId);
      pickerField.value = '03-02-1986';
      const dp = DatePicker({ id: pickerId, dateFormat: 'MM-dd-yyyy' });
      expect(dp.ISOValue).to.equal('1986-03-02');
    });
    it('does dd-MMM-yyyy', () => {
      const pickerField = document.getElementById(pickerId);
      pickerField.value = '02-Mar-1986';
      const dp = DatePicker({ id: pickerId, dateFormat: 'dd-MMM-yyyy' });
      expect(dp.ISOValue).to.equal('1986-03-02');
    });
    it('does yyyy-MMM-dd', () => {
      const pickerField = document.getElementById(pickerId);
      pickerField.value = '1986-Mar-02';
      const dp = DatePicker({ id: pickerId, dateFormat: 'yyyy-MMM-dd' });
      expect(dp.ISOValue).to.equal('1986-03-02');
    });
    it('does yyyy.MM.dd', () => {
      const pickerField = document.getElementById(pickerId);
      pickerField.value = '1986.03.02';
      const dp = DatePicker({ id: pickerId, dateFormat: 'yyyy.MM.dd' });
      expect(dp.ISOValue).to.equal('1986-03-02');
    });
    it('does yyyy.MMM.dd', () => {
      const pickerField = document.getElementById(pickerId);
      pickerField.value = '1986.Mar.02';
      const dp = DatePicker({ id: pickerId, dateFormat: 'yyyy.MMM.dd' });
      expect(dp.ISOValue).to.equal('1986-03-02');
    });
    it('does yyyy/MM/dd', () => {
      const pickerField = document.getElementById(pickerId);
      pickerField.value = '1986/03/02';
      const dp = DatePicker({ id: pickerId, dateFormat: 'yyyy/MM/dd' });
      expect(dp.ISOValue).to.equal('1986-03-02');
    });
    it('does yyyy/MMM/dd', () => {
      const pickerField = document.getElementById(pickerId);
      pickerField.value = '1986/Mar/02';
      const dp = DatePicker({ id: pickerId, dateFormat: 'yyyy/MMM/dd' });
      expect(dp.ISOValue).to.equal('1986-03-02');
    });
    it('does MM.dd.yyyy', () => {
      const pickerField = document.getElementById(pickerId);
      pickerField.value = '03.02.1986';
      const dp = DatePicker({ id: pickerId, dateFormat: 'MM.dd.yyyy' });
      expect(dp.ISOValue).to.equal('1986-03-02');
    });
    it('does MM/dd/yyyy', () => {
      const pickerField = document.getElementById(pickerId);
      pickerField.value = '03/02/1986';
      const dp = DatePicker({ id: pickerId, dateFormat: 'MM/dd/yyyy' });
      expect(dp.ISOValue).to.equal('1986-03-02');
    });
    it('does dd/MMM/yyyy', () => {
      const pickerField = document.getElementById(pickerId);
      pickerField.value = '02/Mar/1986';
      const dp = DatePicker({ id: pickerId, dateFormat: 'dd/MMM/yyyy' });
      expect(dp.ISOValue).to.equal('1986-03-02');
    });
    it('does dd.MM.yyyy', () => {
      const pickerField = document.getElementById(pickerId);
      pickerField.value = '02.03.1986';
      const dp = DatePicker({ id: pickerId, dateFormat: 'dd.MM.yyyy' });
      expect(dp.ISOValue).to.equal('1986-03-02');
    });
    it('does dd.MMM.yyyy', () => {
      const pickerField = document.getElementById(pickerId);
      pickerField.value = '02.Mar.1986';
      const dp = DatePicker({ id: pickerId, dateFormat: 'dd.MMM.yyyy' });
      expect(dp.ISOValue).to.equal('1986-03-02');
    });
  });
});
