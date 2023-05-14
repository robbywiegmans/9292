Project: 9292
Frameworks: WebdriverIO + Appium + Mocha + Allure report
Design pattern: Page Object Model
Author: Robby Wiegmans

---

Prerequisites:
- Download 9292 app from https://m.apkpure.com/nl/9292-public-transport-ticket/nl.negentwee

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

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ RUNNING TESTS _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ STANDARD TEST _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

Prerequisites:

- Open Android Studio and start an Android Emulator
- Open a terminal and run Appium:

> appium

Inside VS code, open a terminal (CTRL + ~)

> npm test

To run a single test:

- set it("should something") to it.only("should something")

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ GENERATE TEST REPORTS _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

> npm run report

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ WRTING TESTS _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ PAGE OBJECT MODEL _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

1. Create or use existing \*.page.js in test/pageobjects folder
2. Use get and return:

For example:

get btnClose() {
return $("~close");
}

3. Start with GET to your element

4. Use naming convention: start element (btn = button, input = inputfield, title = title of page) in lowercase. Then your chosen name of the element, for example the button that closes a page = btnClose

5. Then return the selector

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ E2E TEST _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

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

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ FINDING ELEMENTS _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

To find the name of an element you want to interact with, use Appium Inspector
For more information: https://github.com/appium/appium-inspector

ACCESSIBILTITY ID'S

- Cross-platform compatibility
- Prefered option

For example:

$("~close")

RESOURCE-ID

For example:

$('android=new UiSelector().resourceId("nl.negentwee.features:id/home_save_button")')

XPATH - a proper xpath

For example:

$("//android.widget.Button[@text='Full functionality']")

XPATH - a non-proper xpath

For example:

$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.LinearLayout")

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ACTIONS _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

To interact with an element, use the actions given by WebDriver.io
For more information: https://webdriver.io/docs/api/element/

.click()
.setValue("Amsterdam")

For example:
await PlannerPage.btnDone.click();
await this.btnPlannerFrom.setValue("Amsterdam");

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ VALIDATIONS _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

.toBeExisting()
.not.toBeExisting()
.toBeChecked()
.not.toBeChecked()

For example:

await expect(this.titleSettings).toBeExisting();

_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ COMBI MULTIPLE ACTIONS_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

For example
async returnToHome() {
await this.btnClose.click();
await this.btnBack.click();
await this.btnBack.click();
}
