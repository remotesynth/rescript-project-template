// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Demo = require("../src/Demo.bs.js");
var Tests = require("./Tests.bs.js");

function equals(a, b) {
  return a === b;
}

function run(param) {
  [
      1,
      5,
      6,
      9
    ].forEach(function (num) {
        return Tests.run([
                    [
                      "DemoTest.res",
                      10,
                      25,
                      64
                    ],
                    "Adding random numbers should work too"
                  ], Demo.add(num, num), equals, (num << 1));
      });
  
}

exports.equals = equals;
exports.run = run;
/* Tests Not a pure module */