// jscs:disable
// jshint ignore:start
define([
    "ListControlBase",
    "NotImplementedError"
], function (ListControlBase, NotImplementedError) {
    describe('ListControlBase.spec.js', function () {
        describe("ListControlBase", function () {
            it("is a constructor", function () {
                expect(ListControlBase).not.toBeUndefined();
                expect(typeof ListControlBase === "function").toBe(true);
            });
            it("throws not implemented error, if the standard ListControlBase methods are not part of inheriting class prototypes", function () {
                function A() { ListControlBase.call(this, { html: "<div></div>" }) };
                A.prototype = Object.create(ListControlBase.prototype);
                A.prototype.constructor = A;
                try {
                    var e = new A();
                } catch (e) {
                    expect(e instanceof NotImplementedError).toBe(true);
                }
            });
        });
    });
});

