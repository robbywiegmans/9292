class HomePage {
  get btnMenu() {
    return $("~menu");
  }

  get btnPlanner() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee.features:id/planner_from_background")'
    );
  }

  get btnHomeRefresh() {
    return $(
      'android=new UiSelector().resourceId("nl.negentwee.features:id/home_swiperefresh")'
    );
  }

  get btnEdit() {
    return $("//android.widget.Button[@text='Edit']");
  }
}

module.exports = new HomePage();
