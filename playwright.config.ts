import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch:["bankTransection.test.ts"],
  use:{
    headless: false,
    screenshot: "only-on-failure"
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