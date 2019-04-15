import isNum from '../src/index';
import expect from 'expect.js';

describe('index.js: ', function() {
    it('isNum should work fine.', function() {
        expect(isNum(1)).be.ok();
        expect(isNum('1')).not.be.ok();
    })
});