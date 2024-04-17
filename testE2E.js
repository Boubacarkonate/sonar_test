const { Builder, By } = require('selenium-webdriver');

async function example() {
  let driver = await new Builder().forBrowser('firefox').build();

  try {
    // Test steps
    await driver.get("http://etalentsocial.fr/");
    await driver.manage().window().setRect({ width: 971, height: 693 });
    await driver.findElement(By.id("bouton-menu")).click();
    // await driver.findElement(By.linkText("CANDIDAT")).click();
    // await driver.findElement(By.id("inputEmail")).click();
    // await driver.findElement(By.id("inputEmail")).sendKeys("admin@gmail.com");
    // await driver.findElement(By.id("inputPassword")).click();
    // await driver.findElement(By.id("inputPassword")).sendKeys("123456");
    // await driver.findElement(By.css("form")).click();
    // await driver.findElement(By.css(".btn-dark")).click();
    // await driver.findElement(By.linkText("Voir les offres d'emploi")).click();
    // await driver.findElement(By.css(".logo img")).click();
    // await driver.findElement(By.linkText("déconnexion")).click();
    console.log('ok');
  } finally {
    await driver.quit();
  }
}

example();
