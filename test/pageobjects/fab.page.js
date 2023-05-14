class FabPage {
  get btnFab() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee.features:id/home_fab_main")'
    );
  }

  get btnMyStopStation() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee.features:id/home_fab_add_stop")'
    );
  }

  get btnMyLocation() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee.features:id/home_fab_add_location")'
    );
  }

  get inputLocation() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee:id/location_search_input")'
    );
  }

  get btnSave() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee.features:id/home_save_button")'
    );
  }

  get btnSavedStopsAndStations() {
    return $("~My stops and stations, 1 saved stops or stations");
  }

  get btnMyRoute() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee.features:id/home_fab_add_route")'
    );
  }

  get btnClose() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee.features:id/home_fab_close_label")'
    );
  }

  get btnBack() {
    return $("~Back");
  }

  async setMyStopAndStation() {
    await this.btnFab.click();
    await this.btnMyStopStation.click();
    await this.inputLocation.setValue("Amsterdam");

    const Station = await $("~Train station Amsterdam Centraal Amsterdam");
    await expect(Station).toBeExisting();
    await Station.click();
    await this.btnSave.click();
  }
}

module.exports = new FabPage();
