const expect = require('chai').expect;
const { add } = require('../index');

describe('test-add',() => {
    // 举出各种例子 方方面面
    it('两书相加应该该返回其和', () => {
        expect(add(0,1)).to.equal(1);
        expect(add(0,2)).to.equal(2);
    })
    it('should return NaN when param invaid', () => {
        expect(isNaN(add(0,undefined))).to.equal(true);
        expect(isNaN(add(null,undefined))).to.equal(true);
        expect(isNaN(add({},undefined))).to.equal(true);
    })
    it('两个字符串数值相加,应该返回其转换类型后的和', () => {
        expect(add('11','22')).to.equal(33);
        expect(add('33','22')).to.equal(55);
    })
});