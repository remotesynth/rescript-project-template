// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Tests = require("./Tests.bs.js");

function almostEquals(a, b) {
  return Math.abs(a - b) < 0.1;
}

function run(param) {
  return Tests.run2("Testing almostEquals", 1.5 + 3.4, almostEquals, 4);
}

exports.almostEquals = almostEquals;
exports.run = run;
/* Tests Not a pure module */