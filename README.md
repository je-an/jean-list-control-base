## Description

Abstract base class for all controls which are implementing list functionality in jean environment

## Support
Supports both CommonJS and AMD eco system. If there is no loader, ListControlBase is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
var obj = new ListControlBase();
```
- Use it with require.js
```js
require(["path/to/ListControlBase"], function(ListControlBase){
    // Work with ListControlBase
});
```
- Use it with node.js
```js
var ListControlBase = require("jean-list-control-base");
```
## Installation

`npm install jean-list-control-base --save --legacy-bundling`

## Information

Each inheriting control needs to implement the following methods in its prototype:

### ExampleControl.prototype.set(o) 

Sets data to the control

**Parameters**
- **o**: `Any` - data to be displayed

**Returns**
-  `Boolean` - True, if data is set, false otherwise

### ExampleControl.prototype.get() 

Gets the data from the control

**Returns**
-  `Object` - The data which is currently displayed

### ExampleControl.prototype.clear() 

Clears the data from the control

**Returns**
-  `Boolean` - True, if the control is cleared, false otherwise

### ExampleControl.prototype.isDataValid() 

Checks if there is valid data within this control.
E.g. after a user input etc.

**Returns**
-  `Boolean` - True, if the data is valid, false otherwise

### ExampleControl.prototype.lock() 

Locks the control so that no more interaction can be made.

**Returns**
-  `Boolean` - True, if the control is locked, false otherwise

### ExampleControl.prototype.unlock() 

Unlocks the control so that interaction can be made.

**Returns**
-  `Boolean` - True, if the control is locked, false otherwise

## API Reference

TBD

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT