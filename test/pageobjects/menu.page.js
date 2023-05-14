class MenuPage {
  get btnMenu() {
    return $("~menu");
  }

  get btnDepartures() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee:id/nav_graph_stop_search")'
    );
  }

  get inputSearch() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee:id/location_search_input")'
    );
  }

  get btnCurrentDepatureTrain() {
    return $("~Train");
  }

  get btnCurrentDepatureBus() {
    return $("~Bus");
  }

  get btnCurrentDepatureTram() {
    return $("~Tram");
  }

  get btnCurrentDepatureSubway() {
    return $("~Subway");
  }

  get btnCurrentDepatureFerry() {
    return $("~Ferry");
  }

  get titleSetALocation() {
    return $("//android.widget.TextView[@text='Select a location']");
  }

  get btnMyEtickets() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee:id/nav_graph_ticketing_overview")'
    );
  }

  get titleMyEtickets() {
    return $("//android.widget.TextView[@text='My e-tickets']");
  }

  get btnFAQ() {
    return $("~Frequently asked questions");
  }

  get btnMyTravelAdvices() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee:id/nav_graph_saved_journeys")'
    );
  }

  get titleMyTravelAdvices() {
    return $("//android.widget.TextView[@text='My travel advices']");
  }

  get btnDisturbances() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee:id/nav_graph_disturbances")'
    );
  }

  get titleDisturbances() {
    return $("//android.widget.TextView[@text='Changes']");
  }

  get btnSearch() {
    return $("~Search");
  }

  get inputDisturbance() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee.disturbances:id/disturbance_search_bar")'
    );
  }

  get btnSettings() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee:id/nav_graph_settings")'
    );
  }

  get titleSettings() {
    return $("//android.widget.TextView[@text='Settings']");
  }

  get btnBack() {
    return $("~Back");
  }

  get btnPast() {
    return $("~Past (1)");
  }

  get btnFuture() {
    return $("Future (0)");
  }

  get btnMoreOptions() {
    return $("More options");
  }

  get btnDelete() {
    return $(
      "/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.TextView"
    );
  }

  async openDepartures() {
    await this.btnMenu.click();
    await this.btnDepartures.click();
    await expect(this.titleSetALocation).toBeExisting();
    await this.inputSearch.click();
    await this.inputSearch.setValue("Amsterdam");
    const Departure = await $("~Train station Amsterdam Centraal Amsterdam");
    await expect(Departure).toBeExisting();
    await Departure.click();
    await this.btnCurrentDepatureBus.click();
    await this.btnCurrentDepatureTram.click();
    await this.btnCurrentDepatureSubway.click();
    await this.btnCurrentDepatureFerry.click();
    await this.btnCurrentDepatureTrain.click();
    await this.btnBack.click();
    await this.btnBack.click();
  }

  async openMyEtickets() {
    await this.btnMenu.click();
    await this.btnMyEtickets.click();
    await expect(this.titleMyEtickets).toBeExisting();
    await this.btnFAQ.click();
    await this.btnBack.click();
    await this.btnBack.click();
  }
  async openMyTravelAdvices() {
    await this.btnMenu.click();
    await this.btnMyTravelAdvices.click();
    await expect(this.titleMyTravelAdvices).toBeExisting();
    await this.btnBack.click();
  }
  async openDisturbances() {
    await this.btnMenu.click();
    await this.btnDisturbances.click();
    await expect(this.titleDisturbances).toBeExisting();
    await this.btnSearch.click();
    await this.inputDisturbance.click();
    await this.inputDisturbance.setValue("Amsterdam");
    await this.btnBack.click();
    await this.btnBack.click();
  }
  async openSettings() {
    await this.btnMenu.click();
    await this.btnSettings.click();
    await expect(this.titleSettings).toBeExisting();
    await this.btnBack.click();
  }
}

module.exports = new MenuPage();
