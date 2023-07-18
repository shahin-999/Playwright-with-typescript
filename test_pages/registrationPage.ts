import { Page } from "@playwright/test";

export default class RegisterPage{
    constructor(public page:Page){}

    async selectGender(gender:string){

        if(gender.toLowerCase() === "male"){
            this.page.click("//*[@id='gender-male']");
        }else{
            this.page.click("//*[@id='gender-female']")
        }
    }

    async fillFirstName(fName:string){
        this.page.fill("//*[@id='FirstName']",fName);
    }

    async fillLastName(lName:string){
        this.page.fill("//*[@id='LastName']",lName);
    }

    async selectBirthDate(DD:number, MM:number, YYYY:Number){
        // Select Date
        await this.page.selectOption("//*[@name='DateOfBirthDay']",{
            value:`${DD}`
        });
        // Select Month
        await this.page.selectOption("//*[@name='DateOfBirthMonth']",{
            value:`${MM}`
        });
        // Select Year
        await this.page.selectOption("//*[@name='DateOfBirthYear']",{
            value:`${YYYY}`
        });
    }

    async fillEmail(Email:string){
        this.page.fill("//*[@id='Email']",Email);
    }

    async fillPassword(pass:string){
        this.page.fill("//*[@id='Password']",pass);
    }

    async fillConfirmPassword(pass:string){
        this.page.fill("//*[@id='ConfirmPassword']",pass);
    }
}