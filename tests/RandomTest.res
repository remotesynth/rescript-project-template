let almostEquals = (a, b) => {
  Js.Math.abs_float(a -. b) < 0.1
}

// called by TestEverything.res
let run = () => {
  Tests.run2("Testing almostEquals", 1.5 +. 3.4, almostEquals, 4.)
}