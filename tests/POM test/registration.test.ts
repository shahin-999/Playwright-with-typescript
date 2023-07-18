import { test } from "@playwright/test";
import PageObjectManager from "../../helper classes/pageObjectManager";

test("User successfully register using valid info.", async ({page,baseURL})=>{
    const pageObjectManager = new PageObjectManager(page);

    await pageObjectManager.homePage.gotoHomePage(baseURL);
    await pageObjectManager.homePage.clickRegisterBtn();

    await pageObjectManager.registration.selectGender("Male");
    await pageObjectManager.registration.selectBirthDate(21,1,2011);

    page.close();
})