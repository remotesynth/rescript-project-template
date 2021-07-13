@module external launchDarkly: 'whatever = "launchdarkly-node-server-sdk"
let ldclient = launchDarkly["init"](. "sdk-64fb3f87-7e48-4a8d-99de-595a7472472f")
type user = {key: string}

let me = {
  key: "aa0ceb",
}

ldclient["on"](."ready", () => {
  Js.log("It's now safe to request feature flags")

  let showFeature = ldclient["variation"](. "my-first-feature-flag", me)

  if showFeature {
    Js.log("Show feature")
  } else {
    Js.log("Don't show feature")
  }
})
