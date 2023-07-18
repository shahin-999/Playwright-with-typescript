import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch:["POM test/registration.test.ts"],
  use:{
    headless: false,
    screenshot: "only-on-failure",
    baseURL: "https://training.nop-station.com/"
  },
  retries:0,
  reporter:[
    ["dot"],
    ["list"],
    ["json", {outputFile:"jsonReports/jsonReport.json"}],
    ["html", {open:"on-failure"}]

  ]
}

export default config; 