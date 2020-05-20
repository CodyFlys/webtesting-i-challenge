const enhancer = require('./enhancer.js');
// test away!

let item = {
    name: "sword",
    enhancement: 15,
    durability: 100
  }

describe('helpers module', () => {
    describe('repairs item', () => {
        it('can repair to 100', () => {
            const expectedDurability = 100;
            const actualDurability = enhancer.repair(item)
            expect(actualDurability.durability).toBe(expectedDurability);
        })
    })

    describe('enhances item', () => {
        it('can enhance item if enhancement is less than 20', () => {
            const actualEnhancement = enhancer.succeed(item);
            expect(actualEnhancement.enhancement).toBeLessThan(20)
        })
    })

    describe('FAILS to enhance the item if enhancement is less than 15', () => {
        it('FAILS to enhance the item if enhancement is less than 15', () => {
            const actualEnhancement = enhancer.fail(item);
            expect(actualEnhancement.enhancement).toBeLessThan(15)
        })
    })

    describe('FAILS to enhance the item if enhancement is >= 15', () => {
        it('FAILS to enhance the item if enhancement is >= 15', () => {
            const actualEnhancement = enhancer.fail(item);
            expect(actualEnhancement.enhancement).toBeGreaterThanOrEqual(15)
        })
    })

    describe('FAILS to enhance the item if enhancement is > 16', () => {
        it('FAILS to enhance the item if enhancement is > 16', () => {
            const actualEnhancement = enhancer.fail(item);
            expect(actualEnhancement.enhancement).toBeGreaterThan(16)
        })
    })
})