class EditPage {
  get btnClose() {
    return $("~close");
  }

  get btnSavedStopsAndStations() {
    return $("~My stops and stations, 1 saved stops or stations");
  }

  async noneSavedStopsAndStations() {
    await expect(this.btnSavedStopsAndStations).not.toBeExisting();
    await this.btnClose.click();
  }

  async savedStopsAndStations() {
    await expect(this.btnSavedStopsAndStations).toBeExisting();
    await this.btnClose.click();
  }
}

module.exports = new EditPage();
