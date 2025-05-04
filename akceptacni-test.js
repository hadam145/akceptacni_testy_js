const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');

async function testVypocitej() {
    const options = new chrome.Options();

    let driver;

    try {
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();


            
        await driver.get('./index.html');

        await driver.sleep(5000);

        await driver.findElement(By.id('cislo1')).sendKeys('5', Key.RETURN);
        await driver.findElement(By.id('cislo2')).sendKeys('10', Key.RETURN);
        await driver.findElement(By.id('submit')).click();


        const result = await driver.findElement(By.id('vysledek')).getText();
        console.log('Výsledek:', result);
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        if (driver) {
            await driver.quit();
        }
    }
}

testVypocitej();
