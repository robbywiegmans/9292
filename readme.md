# Project: 9292

Frameworks: WebdriverIO + Appium + Mocha + Allure report
Design pattern: Page Object Model
Author: Robby Wiegmans

---

## Prerequisites:

- Install NodeJS and NPM:
  https://nodejs.org/en

- Install Android Studio:
  https://developer.android.com/studio

- Setup an Android Emulator

- Install Appium 2.0:

  > npm i -g appium@next

- Install Appium Doctor:

  > npm install appium-doctor -g

- Run Appium Doctor:

  > appium-doctor

- Importing package inside this project:

  > npm i

## RUNNING TESTS

### STANDARD TEST

Prerequisites:

- Open Android Studio and start an Android Emulator
- Open a terminal and run Appium:

> appium

Inside VS code, open a terminal (CTRL + ~)

> npm test

To run a single test:

- set it("should something") to it.only("should something")

### GENERATE TEST REPORTS

> npm run report

## WRTING TESTS

### PAGE OBJECT MODEL

1. Create or use existing \*.page.js in test/pageobjects folder
2. Use get and return:

For example:

get btnClose() {
return $("~close");
}

3. Start with GET to your element

4. Use naming convention: start element (btn = button, input = inputfield, title = title of page) in lowercase. Then your chosen name of the element, for example the button that closes a page = btnClose

5. Then return the selector

### E2E TEST

For example:
In the describe(), state the name of page, e.g., 'Onboarding'
In the it(), state the promise, e.g, 'should give Full functionality'

Use async/await to let Appium it should proceed in the right order and wait for an element to appear.
Use the name of the Page, e.g., ConsentPage/HomePage/MenuPage/PlannerPage and then the name of the element which is available only for that page.
Use the action you want to interact with, e.g., click

describe("Onboarding", () => {
it("should give Full functionality", async () => {
await ConsentPage.btnFullfunctionality.click();
await expect(HomePage.btnMenu).toBeExisting();
});
});

### FINDING ELEMENTS

To find the name of an element you want to interact with, use Appium Inspector
For more information: https://github.com/appium/appium-inspector

ACCESSIBILTITY ID'S

For example:
$("~close")

RESOURCE-ID

For example:
$('android=new UiSelector().resourceId("nl.negentwee.features:id/home_save_button")')

XPATH

For example:
$("//android.widget.Button[@text='Full functionality']")

ACTIONS

To interact with an element, use the actions given by WebDriver.io
For more information: https://webdriver.io/docs/api/element/

.click()
.setValue("Amsterdam")

For example:
await PlannerPage.btnDone.click();
await this.btnPlannerFrom.setValue("Amsterdam");

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- VALIDATIONS _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

.toBeExisting()
.not.toBeExisting()
.toBeChecked()
.not.toBeChecked()

For example:

await expect(this.titleSettings).toBeExisting();

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- COMBI MULTIPLE ACTIONS*-*-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

For example
async returnToHome() {
await this.btnClose.click();
await this.btnBack.click();
await this.btnBack.click();
}
