import { expect, test } from "@playwright/test";


async function loginToBank(page:any){
    await page.goto("https://shahin-999.github.io/JS-Projects/bank-transection/");
    const loginPageTitle = await page.title();
    console.log(loginPageTitle);
    expect(loginPageTitle).toContain("Login");

    await page.fill("//*[@id='user']","admin");
    await page.fill("//*[@id='password']","Admin");
    await page.click("//*[@id='login-btn']");

}


test('Login to the bank as a user', async({page})=>{
    await loginToBank(page);
    const title = await page.title();
    console.log(`Login page title: ${title}`);
    expect(title).toEqual("Bank of No Security");

    page.close();
})

test('Verify deposite update properly', async ({page})=>{
    await loginToBank(page);
    const initialDeposite = await page.locator("//*[@id='diposit-amount']").innerText();
    const initialWithdraw = await page.locator("//*[@id='withdraw-amount']").innerText();
    const initialBalance = await page.locator("//*[@id='balance-amount']").innerText();

    let currentDeposite = parseInt(initialDeposite);
    let currentWithdraw = parseInt(initialWithdraw);
    let currentBalance = parseInt(initialBalance);

    console.log(`Initial amount - 
                \nTotal deposote: ৳${initialDeposite}
                \nTotal withdrow: ৳${initialWithdraw}
                \nTotal balance: ৳${initialBalance}`);

    // Do Disposite...
    await page.fill("//*[@id='dipositAmount']","100");
    await page.click("//*[@id='diposit-btn']");

    currentDeposite += 100;
    currentBalance += 100
    console.log(`Current total deposite: ৳${currentDeposite}`);

    const actualDeposite = await page.locator("//*[@id='diposit-amount']").innerText();
    const actualWithdraw = await page.locator("//*[@id='withdraw-amount']").innerText();
    const actualBalance = await page.locator("//*[@id='balance-amount']").innerText();

    expect(actualDeposite).toEqual(currentDeposite.toString());
    expect(actualWithdraw).toEqual(currentWithdraw.toString());
    expect(actualBalance).toEqual(currentBalance.toString());


    page.close();
})