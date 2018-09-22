define([
    "Inheritance",
    "DomElement",
    "Merge",
    "Failure",
    "TypeCheck",
    "Interface"
], function (
    Inheritance,
    DomElement,
    Merge,
    Failure,
    TypeCheck,
    Interface
) {
        /**
         * Abstract base class for all controls which are implementing list functionality in jean environment 
         * @alias ListControlBase 
         * @constructor
         * @param {Object} options - options object
         * @param {String} options.html - the html markup
         * @param {Number} [options.height=0] - height of the list in px
         */
        var ListControlBase = function (options) {
            Inheritance.inheritConstructor(DomElement, this, Merge({ // jscs:ignore
                html: TypeCheck.isString(options.html) ? options.html : Failure.throwTypeError("options.html is not a string"),
                height: TypeCheck.isNumber(options.height) ? options.height : 0
            }, TypeCheck.isDefined(options) ? options : {}));
            Interface.areMethodsImplemented(["add", "update", "get", "remove", "clear", "lock", "unlock"], this);
        };
        Inheritance.inheritPrototype(ListControlBase, DomElement);
        return ListControlBase;
    });