import { Page } from "@playwright/test";
import Homepage from "../test_pages/homePage";

export default class PageObjectManager{
    constructor (public page: Page){}

    async loadAllPages(){
        const homePage = new Homepage(this.page);
    }

}