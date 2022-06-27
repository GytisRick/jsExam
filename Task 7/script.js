/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
'use strict'

const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

const showObjectKeys = (obje) => Object.keys(obje);

console.log(showObjectKeys(audi));
