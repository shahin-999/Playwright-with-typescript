import { test } from "@playwright/test";
import PageObjectManager from "../../helper classes/pageObjectManager";

test("User can login with a valid credential", async ({page, baseURL})=>{
    const pageObjectManager = new PageObjectManager(page);

    await pageObjectManager.homePage.gotoHomePage(baseURL);
    await pageObjectManager.homePage.clickLoginBtn();

    await pageObjectManager.loginPage.fillEmailField("testuser@mail.com");
    await pageObjectManager.loginPage.fillPasswordField("abcd1234");
    await pageObjectManager.loginPage.clickLoginBtn();

    page.close();
});
