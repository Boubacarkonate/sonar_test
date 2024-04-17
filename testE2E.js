const { Builder, By, Key, until } = require('selenium-webdriver');

(async function testE2E() {
    let driver;
    try {
        // Initialisation du pilote WebDriver
        driver = await new Builder().forBrowser('chrome').build();
        
        // Navigation vers l'URL de l'application
        await driver.get("http://localhost:8081/");

        // Redimensionnement de la fenêtre du navigateur
        await driver.manage().window().setRect({ width: 1552, height: 832 });

        // Action : Remplir un champ email
        await driver.findElement(By.css(".css-view-175oi2r:nth-child(1) > .css-view-175oi2r > .css-textinput-11aywtz")).click();
        await driver.findElement(By.css(".css-view-175oi2r:nth-child(1) > .css-view-175oi2r > .css-textinput-11aywtz")).sendKeys("toto@gmail.com");

        // Action : Remplir un champ mot de passe
        await driver.findElement(By.css(".css-view-175oi2r:nth-child(2) > .css-view-175oi2r > .css-textinput-11aywtz")).click();
        await driver.findElement(By.css(".css-view-175oi2r:nth-child(2) > .css-view-175oi2r > .css-textinput-11aywtz")).sendKeys("123456");

        // Action : Cliquer sur le bouton de connexion
        await driver.findElement(By.css(".css-view-175oi2r:nth-child(3) .css-text-146c3p1")).click();

        // Ajoutez d'autres actions de test ici...

        console.log("Tests end-to-end terminés avec succès !");
    } catch (error) {
        console.error('Une erreur est survenue:', error);
    } finally {
        // Fermeture du pilote WebDriver
        await driver.quit();
    }
})();

