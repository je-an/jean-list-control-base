({
    baseUrl: '.',
    out: 'dist/jean-list-control-base.js',
    optimize: 'none',
    name: 'node_modules/jean-amd/dist/jean-amd',
    include: ["src/ListControlBase"],
    wrap: {
        start: 
        "(function (root, factory) { \n" +
        " \t if (typeof define === 'function' && define.amd) { \n" +
        "\t \t define([], factory); \n" +
        "\t} else { \n" +
        "\t \troot.ListControlBase = root.ListControlBase || {}; \n" +
        "\t \troot.ListControlBase = factory();\n" +
        "\t}\n" +
        "}(this, function() {",
        end:
        "\n \t return require('src/ListControlBase'); \n" +
        "}));"
    },
     paths:{
        TypeCheck: "node_modules/jean-type-check/src/TypeCheck",
        Failure: "node_modules/jean-failure/src/Failure",
        Inheritance: "node_modules/jean-inheritance/dist/jean-inheritance",
        DomElement: "node_modules/jean-dom-element/dist/jean-dom-element",
        DomUtil: "node_modules/jean-dom-util/dist/jean-dom-util",
        Merge: "node_modules/jean-merge/dist/jean-merge",
    }
})