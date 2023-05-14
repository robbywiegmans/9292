class ConsentPage {
  get btnFullfunctionality() {
    return $("//android.widget.Button[@text='Full functionality']");
  }
}

module.exports = new ConsentPage();
