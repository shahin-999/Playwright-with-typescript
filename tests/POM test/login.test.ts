import { test } from "@playwright/test";
import Homepage from "../../test_pages/homePage";
import LoginPage from "../../test_pages/LoginPage";

test("User can login with a valid credential", async ({page, baseURL})=>{
    const homePage = new Homepage(page);
    const loginPage = new LoginPage(page)
    
    await homePage.gotoHomePage(`${baseURL}`);
    await homePage.clickLoginBtn();

    await loginPage.fillEmailField("testuser@mail.com");
    await loginPage.fillPasswordField("abcd1234");
    await loginPage.clickLoginBtn();
})   
