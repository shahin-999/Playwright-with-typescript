import { chromium, expect, test } from "@playwright/test";

test("Login into a demo site", async ()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://admin-demo.nopcommerce.com/login");
    console.log(`The title is: ${await page.title()}`);
    await page.fill("#Email","admin@yourstore.com");
    await page.fill("#Password","admin");
    await page.click("//button");

    await page.waitForLoadState();
    console.log(`The title is: ${await page.title()}`);
    const pageTitle = await page.title();
    expect(page.title()).toEqual("Dashboard / nopCommerce administration");
    // await expect(page).toHaveTitle("");

    await page.close();
});