var assert = require('assert');

describe('a feature', function () {
    describe('a scenario', function () {
        it('does somethig specific', function () {
            assert(true);
        });

        it('also needs to do this', () => {
            assert(true);
            require('assert');
        });
    });
});