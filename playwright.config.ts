import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch:"login.test.ts"
}
export default config; 