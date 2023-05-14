class PlannerPage {
  get btnBack() {
    return $("~Back");
  }

  get btnPlannerFrom() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee.features:id/location_from")'
    );
  }

  get btnPlannerTo() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee.features:id/location_to")'
    );
  }

  get btnClearDeparture() {
    return $("~clear departure");
  }

  get btnClearDestination() {
    return $("~clear destination");
  }

  get btnPersonalTravelOptions() {
    return $("~Personalise travel options");
  }

  get btnBegin() {
    return $("~Option for start your journey");
  }

  get btnEnd() {
    return $("~Option for end your journey");
  }

  get btnBicycle() {
    return $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.LinearLayout"
    );
  }

  get btnOptions() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee.features:id/planner_extra_options_button")'
    );
  }

  get btnVia() {
    return $("~via");
  }

  get inputLocation() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee:id/location_search_input")'
    );
  }

  get btnModalityBus() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee.features:id/planner_modality_bus")'
    );
  }

  get btnModalityTrain() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee.features:id/planner_modality_train")'
    );
  }

  get btnModalityTram() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee.features:id/planner_modality_tram")'
    );
  }

  get btnModalitySubway() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee.features:id/planner_modality_subway")'
    );
  }

  get btnModalityFerry() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee.features:id/planner_modality_ferry")'
    );
  }

  get btnSupplement() {
    return $("~Transport with supplement");
  }

  get btnTransportOnDemand() {
    return $("~Transport on demand");
  }

  get btnDone() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee.features:id/planner_options_button")'
    );
  }

  get btnTravelAdviceResult() {
    return $('(//android.view.View[@content-desc="0 transfers"])[1]');
  }

  get titleTravelAdviceDetails() {
    return $("~Station Amsterdam Centraal to Station Rotterdam Centraal");
  }

  get btnSaveTravelAdvice() {
    return $("~Save travel advice");
  }

  get btnClose() {
    return $("~close");
  }

  get btnRecentTravelAdvice() {
    return $("~Recent, 1 recent journey advices");
  }

  get screenContent() {
    return $('android=new UiSelector().resourceId("android:id/content")');
  }

  async setDeparture() {
    await this.btnPlannerFrom.click();
    await this.btnPlannerFrom.setValue("Amsterdam");

    const Departure = await $("~Train station Amsterdam Centraal Amsterdam");
    await expect(Departure).toBeExisting();
    await Departure.click();
  }

  async setDestination() {
    await this.btnPlannerTo.setValue("Rotterdam");
    const Desistination = await $(
      "~Train station Rotterdam Centraal Rotterdam"
    );
    await expect(Desistination).toBeExisting();
    await Desistination.click();
  }

  async setBeginBicycle() {
    await this.btnBegin.click();
    await this.btnBicycle.click();
  }

  async setEndBicycle() {
    await this.btnEnd.click();
    await this.btnBicycle.click();
  }

  async setDisableBus() {
    await this.btnModalityBus.click();
    await expect(this.btnModalityBus).not.toBeChecked();
  }

  async setDisableTrain() {
    await this.btnModalityTrain.click();
    await expect(this.btnModalityTrain).not.toBeChecked();
  }

  async setDisableTram() {
    await this.btnModalityTram.click();
    await expect(this.btnModalityTram).not.toBeChecked();
  }

  async setDisableSubway() {
    await this.btnModalitySubway.click();
    await expect(this.btnModalitySubway).not.toBeChecked();
  }

  async setDisableFerry() {
    await this.btnModalityFerry.click();
    await expect(this.btnModalityFerry).not.toBeChecked();
  }

  async setDisableSupplement() {
    await this.btnSupplement.click();
    await expect(this.btnSupplement).not.toBeChecked();
  }

  async setDisableTransportOnDemand() {
    await this.btnTransportOnDemand.click();
    await expect(this.btnTransportOnDemand).not.toBeChecked();
  }

  async clickTravelAdvice() {
    await this.btnTravelAdviceResult.click();
    await expect(this.titleTravelAdviceDetails).toBeExisting();
  }

  async setSaveTravelAdvice() {
    await this.btnSaveTravelAdvice.click();
  }

  async returnToHome() {
    await this.btnClose.click();
    await this.btnBack.click();
    await this.btnBack.click();
  }
}

module.exports = new PlannerPage();
