## Description

Abstract base class for all controls which are implementing list functionality in jean environment

## Support
Supports AMD eco system. If there is no loader, ListControlBase is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
// Initialise the control
// ChildListControl inherits ListControlBase constructor and 
// prototype methods
var eC = new ChildListControl({  html: "<div id=''>ChildListControl</div>" });
// Add the control to the document
document.body.appendChild(ec.element);
```
- Use it with require.js
```js
require(["path/to/ListControlBase"], function(ListControlBase){
    // Work with ListControlBase
});
```

## Installation

`npm install jean-list-control-base --save --legacy-bundling`

## Information

Each inheriting control needs to implement the following methods in its prototype:

### ChildListControl.prototype.add(o) 

Adds an entry to the list control

**Parameters**
- **o**: `Any` - data of the entry

**Returns**
-  `Boolean` - True, if entry is added, false otherwise

### ChildListControl.prototype.update(id, o) 

Updates an entry in the list control

**Parameters**
- **id**: `String` - id of the list entry which shall be updated
- **o**: `Any` - updated data for the entry identified by `id`

**Returns**
-  `Boolean` - True if entry is updated, false otherwise

### ChildListControl.prototype.get() 

Gets e.g. the selected entries or other values

**Returns**
-  `Any` - The data which shall be retrieved from the list control

### ChildListControl.prototype.remove(id) 

Removes the entry which are identified by id

**Parameters**
- **id**: `String` - id of the list entry which shall be removed

**Returns**
-  `Boolean` - True if the entry is removed, false otherwise

### ChildListControl.prototype.clear() 

Clears all entries in the list control

**Returns**
-  `Boolean` - True, if entries are cleared, false otherwise

### ChildListControl.prototype.lock() 

Locks the control so that no more interaction can be made.

**Returns**
-  `Boolean` - True, if the control is locked, false otherwise

### ChildListControl.prototype.unlock() 

Unlocks the control so that interaction can be made.

**Returns**
-  `Boolean` - True, if the control is locked, false otherwise

## API Reference

TBD

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT