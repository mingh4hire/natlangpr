const nameChecker = require('./nameChecker');

describe('nameChecker', () => {
    it('should inlude name ', () => {
        expect(nameChecker.includesname('Picard')).toBe(true)
    });

    it('should not inlude name ', () => {
        expect(nameChecker.includesname('Diasy')).toBe(false)
    });
})