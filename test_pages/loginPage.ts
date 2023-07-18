import { Page, expect } from "@playwright/test";

export default class LoginPage{
    constructor (public page: Page){}


    async fillEmailField(email: string){
        await this.page.fill("//*[@id='Email']",email);
    }
    async fillPasswordField(pass: string){
        await this.page.fill("//*[@id='Password']",pass);
    }
    async clickLoginBtn(){
        await this.page.click("//button[contains(@class,'login-button')]");
        expect(await this.page.locator(".ico-logout").innerText()).toContain("Log out");
    }

    async doLogin(email:string, pass:string){
        await this.fillEmailField(email);
        await this.fillPasswordField(pass);
        await this.clickLoginBtn();
    }

}