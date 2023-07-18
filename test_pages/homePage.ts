import {Page, expect} from "@playwright/test"

export default class Homepage{
    constructor(public page:Page){}

    async gotoHomePage(baseURL){
        await this.page.goto(baseURL);
    }
    async clickLoginBtn(){
        await this.page.getByText("Log in").click();
        await this.page.waitForLoadState("networkidle");
        expect(await this.page.title()).toContain("Login");
    }
    async clickRegisterBtn(){
        await this.page.click("//*[@class='ico-register']");
        await this.page.waitForLoadState("networkidle");
        expect(await this.page.title()).toContain("Register");
    }
}