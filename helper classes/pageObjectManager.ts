import { Page } from "@playwright/test";
import Homepage from "../test_pages/homePage";
import LoginPage from "../test_pages/LoginPage";
import RegisterPage from "../test_pages/registrationPage";

export default class PageObjectManager{
    constructor (public page: Page){}

    homePage = new Homepage(this.page);
    loginPage = new LoginPage(this.page);
    registration = new RegisterPage(this.page);

}