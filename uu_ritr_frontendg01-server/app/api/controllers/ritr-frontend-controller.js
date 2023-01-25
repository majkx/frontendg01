"use strict";
const RitrFrontendAbl = require("../../abl/ritr-frontend-abl.js");

class RitrFrontendController {
  init(ucEnv) {
    return RitrFrontendAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return RitrFrontendAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return RitrFrontendAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new RitrFrontendController();
