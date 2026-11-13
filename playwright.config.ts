
import { defineConfig, devices } from '@playwright/test';

const isCI = !!(globalThis as { process?: { env?: { CI?: string } } }).process?.env?.CI;

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: isCI,

  retries: isCI ? 2 : 0,

  workers: isCI ? 1 : undefined,

  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  use: {
    baseURL: 'https://coffee-cart.app/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
