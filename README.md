# node-tf2-enum

Provides various TF2 enums for use with TF2-related Node.js projects

## Objects

The following objects are exported as a part of this module:

- Quality (item qualities)
  - ID
  - Color
- Craft Weapons
  - Scout
    - Primary

## Example

```javascript
var tf2Enum = require("./index.js");
const unusualQuality = tf2Enum.QUALITY.COLOR.Unusual;
const fanSKU = tf2enum.CRAFTWEAPON.SCOUT.PRIMARY["Force-A-Nature"];
```
