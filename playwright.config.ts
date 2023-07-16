import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch:"login.test.ts",
  use:{
    headless: true,
    screenshot: "only-on-failure",
    
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