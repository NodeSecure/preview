import { PlaywrightTestConfig } from "@playwright/test";

const SECOND = 1000;

const config: PlaywrightTestConfig = {
  webServer: {
    command: "npm run dev",
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  workers: 4, 
  timeout: 40 * SECOND
};

export default config;
