const ConsentPage = require("../pageobjects/consent.page");
const HomePage = require("../pageobjects/home.page");
const EditPage = require("../pageobjects/edit.page");
const PlannerPage = require("../pageobjects/planner.page");
const FabPage = require("../pageobjects/fab.page");
const MenuPage = require("../pageobjects/menu.page");

describe("Menu", () => {
  beforeEach(() => {
    ConsentPage.btnFullfunctionality.click();
  });

  it("should open Departures", async () => {
    await MenuPage.openDepartures();
  });

  it("should open My E-tickets", async () => {
    await MenuPage.openMyEtickets();
  });

  it("should open My Travel Advices", async () => {
    await MenuPage.openMyTravelAdvices();
  });

  it("should open Disturbances", async () => {
    await MenuPage.openDisturbances();
  });

  it("should open Settings", async () => {
    await MenuPage.openSettings();
  });
});

describe("Planner", () => {
  beforeEach(() => {
    ConsentPage.btnFullfunctionality.click();
  });

  it("should set a departure and destination", async () => {
    await HomePage.btnPlanner.click();
    await PlannerPage.setDeparture();
    await PlannerPage.setDestination();
  });

  it("should set only Train with no suppplement and no transport on demand", async () => {
    await PlannerPage.btnOptions.click();
    await PlannerPage.setDisableBus();
    await PlannerPage.setDisableTram();
    await PlannerPage.setDisableSubway();
    await PlannerPage.setDisableFerry();
    await PlannerPage.setDisableSupplement();
    await PlannerPage.setDisableTransportOnDemand();
    await PlannerPage.btnDone.click();
  });

  it("should set Begin with Bicycle and End with Bicycle", async () => {
    await PlannerPage.setBeginBicycle();
    await PlannerPage.setEndBicycle();
  });

  it("should Save travel result", async () => {
    await PlannerPage.clickTravelAdvice();
    await PlannerPage.setSaveTravelAdvice();
  });

  it("should return to Home", async () => {
    await PlannerPage.returnToHome();
  });

  it("should have one Past travel advices", async () => {
    await HomePage.btnMenu.click();
    await MenuPage.btnMyTravelAdvices.click();
    await MenuPage.btnBack.click();
  });
});

describe("Edit", () => {
  beforeEach(() => {
    ConsentPage.btnFullfunctionality.click();
  });

  it("should have none Saved My stop and station", async () => {
    await HomePage.btnEdit.click();
    await EditPage.noneSavedStopsAndStations();
  });

  it("should set My stop and station", async () => {
    await FabPage.setMyStopAndStation();
  });

  it("should have one My stop and station", async () => {
    await HomePage.btnEdit.click();
    await EditPage.savedStopsAndStations();
  });
});
