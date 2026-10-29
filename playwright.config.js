// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : undefined,

    reporter: [
        ['list'],
        ['html', {
            outputFolder: 'playwright-report',
            open: 'never'
        }],
        ['allure-playwright']
    ],

    use: {
        // Preserve your existing baseURL and other settings

        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
        video: 'retain-on-failure'
    },
    // projects: [
    // {
    //     name: 'chromium',
    //     use: { ...devices['Desktop Chrome'] },
    // },
    // ],
});