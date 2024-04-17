// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('test', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('test', async function() {
    // Test name: test
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("http://localhost:8081/")
    // 2 | setWindowSize | 550x692 | 
    await driver.manage().window().setRect({ width: 550, height: 692 })
    // 3 | click | css=.css-view-175oi2r:nth-child(1) > .css-view-175oi2r > .css-textinput-11aywtz | 
    await driver.findElement(By.css(".css-view-175oi2r:nth-child(1) > .css-view-175oi2r > .css-textinput-11aywtz")).click()
    // 4 | type | css=.css-view-175oi2r:nth-child(1) > .css-view-175oi2r > .css-textinput-11aywtz | toto@gmail.com
    await driver.findElement(By.css(".css-view-175oi2r:nth-child(1) > .css-view-175oi2r > .css-textinput-11aywtz")).sendKeys("toto@gmail.com")
    // 5 | click | css=.css-view-175oi2r:nth-child(2) > .css-view-175oi2r > .css-textinput-11aywtz | 
    await driver.findElement(By.css(".css-view-175oi2r:nth-child(2) > .css-view-175oi2r > .css-textinput-11aywtz")).click()
    // 6 | type | css=.css-view-175oi2r:nth-child(2) > .css-view-175oi2r > .css-textinput-11aywtz | 123456
    await driver.findElement(By.css(".css-view-175oi2r:nth-child(2) > .css-view-175oi2r > .css-textinput-11aywtz")).sendKeys("123456")
    // 7 | click | css=.css-view-175oi2r:nth-child(3) .css-text-146c3p1 | 
    await driver.findElement(By.css(".css-view-175oi2r:nth-child(3) .css-text-146c3p1")).click()
    // 8 | click | css=.css-view-175oi2r:nth-child(1) > .r-backgroundColor-14lw9ot > .css-view-175oi2r | 
    await driver.findElement(By.css(".css-view-175oi2r:nth-child(1) > .r-backgroundColor-14lw9ot > .css-view-175oi2r")).click()
    // 9 | click | css=.r-fontSize-ubezar | 
    await driver.findElement(By.css(".r-fontSize-ubezar")).click()
    // 10 | type | css=.r-fontSize-ubezar | bonjour
    await driver.findElement(By.css(".r-fontSize-ubezar")).sendKeys("bonjour")
    // 11 | click | css=.r-color-1j7ouym | 
    await driver.findElement(By.css(".r-color-1j7ouym")).click()
    // 12 | click | css=.css-view-175oi2r:nth-child(3) .css-accessibilityImage-9pa8cd | 
    await driver.findElement(By.css(".css-view-175oi2r:nth-child(3) .css-accessibilityImage-9pa8cd")).click()
    // 13 | click | css=.css-view-175oi2r:nth-child(4) > .css-text-146c3p1 | 
    await driver.findElement(By.css(".css-view-175oi2r:nth-child(4) > .css-text-146c3p1")).click()
    // 14 | click | css=.css-view-175oi2r:nth-child(1) > .css-view-175oi2r:nth-child(1) > .css-view-175oi2r > .css-view-175oi2r > .css-accessibilityImage-9pa8cd | 
    await driver.findElement(By.css(".css-view-175oi2r:nth-child(1) > .css-view-175oi2r:nth-child(1) > .css-view-175oi2r > .css-view-175oi2r > .css-accessibilityImage-9pa8cd")).click()
    // 15 | click | css=.css-view-175oi2r:nth-child(3) > .css-view-175oi2r > .css-view-175oi2r > .css-view-175oi2r > .css-view-175oi2r > .css-view-175oi2r > .css-view-175oi2r > .css-accessibilityImage-9pa8cd | 
    await driver.findElement(By.css(".css-view-175oi2r:nth-child(3) > .css-view-175oi2r > .css-view-175oi2r > .css-view-175oi2r > .css-view-175oi2r > .css-view-175oi2r > .css-view-175oi2r > .css-accessibilityImage-9pa8cd")).click()
    // 16 | click | css=.css-view-175oi2r:nth-child(5) > .css-text-146c3p1 | 
    await driver.findElement(By.css(".css-view-175oi2r:nth-child(5) > .css-text-146c3p1")).click()
    // 17 | click | css=.css-view-175oi2r:nth-child(3) .css-accessibilityImage-9pa8cd | 
    await driver.findElement(By.css(".css-view-175oi2r:nth-child(3) .css-accessibilityImage-9pa8cd")).click()
    // 18 | click | css=.css-view-175oi2r:nth-child(6) > .css-text-146c3p1 | 
    await driver.findElement(By.css(".css-view-175oi2r:nth-child(6) > .css-text-146c3p1")).click()
  })
})