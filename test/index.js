var ratchet = require('../index');
var chai = require('chai');

describe('nurse-ratchet', function () {

    it('should get a module name without the namespace', function () {
        chai.expect(ratchet.getModuleName('@walmart/foo')).to.be.equal('foo');
        chai.expect(ratchet.getModuleName('bar')).to.be.equal('bar');
    });

});