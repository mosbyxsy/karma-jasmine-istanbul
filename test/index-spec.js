const Util = require('../src/index');

describe('index.js: ', function() {
    it('isNum() should work fine.', function() {
        expect(Util.isNum(1)).toBe(true);
        expect(Util.isNum('1')).toBe(false);
    })
});