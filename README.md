# node-tf2-enum

![npm](https://img.shields.io/npm/v/tf2-enum?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/tf2-enum?style=flat-square)

Provides various TF2 enums for use with TF2-related Node.js projects

This project is actively being developed, and acts as an entry into creating npm packages

## Objects

The following objects are exported as a part of this module:

- Quality
  - ID
  - Color
- Craft Weapons
  - Scout, Solider, Pyro, Demoman, Heavy, Engineer, Medic, Sniper
    - Primary
    - Secondary
    - Melee
  - Spy
    - Primary
    - Melee
    - PDA
    - PDA2
- Stock Weapons
  - Def Index Map
  - Name Map
- Strange Parts
  - Def Index
- Sheens
  - Killstreak Sheen Number
- Killstreakers
  - Killstreaker Effect Number
- Paints
  - SKU
  - Hex Color Code

## Instalation

Via [NPM](https://www.npmjs.com/package/tf2-enum): `npm install tf2-enum`

## Example

```javascript
> var tf2Enum = require("tf2-enum");
undefined
> tf2enum.PAINT.SKU.THE_BITTER_TASTE_OF_DEFEAT_AND_LIME
'5054;6'
> tf2enum.KILLSTREAKER.CEREBRAL_DISCHARGE
'KE-2003'
> tf2enum.QUALITY.ID.UNUSUAL
5
> tf2enum.STRANGEPART.KILLS_WHILE_EXPLOSIVE_JUMPING
6022
> tf2enum.CRAFTWEAPON.SCOUT.PRIMARY.SODA_POPPER
'448;6'
```
