
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test(`The Draw button displays the div`, async () => {
    let drawButton = await driver.findElement(By.id(`draw`))

    await drawButton.click()

    await driver.sleep(200)

    let choices = await driver.findElement(By.id(`choices`))

    let displayed = choices.isDisplayed()

    expect(displayed).toBeTruthy()

})

test(`Add to Duo button displays the div`, async () => {
    let drawButton = await driver.findElement(By.id(`draw`))

    await drawButton.click()

    await driver.sleep(200)

    let addButton = await driver.findElement(By.className(`bot-btn`))

    await addButton.click()

    await driver.sleep(2000)

    let playerDuo = await driver.findElement(By.id(`player-duo`))

    let displayed = playerDuo.isDisplayed()

    expect(displayed).toBeTruthy()
    
})