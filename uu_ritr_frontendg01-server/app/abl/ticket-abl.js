"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/ticket-error.js");

const WARNINGS = {};

class TicketAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("ticket");
  }

  async delete(awid, dtoIn) {

    let dtoOut = await this.dao.remove(awid, dtoIn.id)
    return dtoOut;
  }

  async list(awid, dtoIn) {

    let dtoOut = await this.dao.list(awid)
    return dtoOut;
  }

  async get(awid, dtoIn) {
    let dtoOut = await this.dao.get(awid, dtoIn.id)
    return dtoOut;
  }

  async create(awid, dtoIn) {
    /*
    name :
    desc :
    */
    dtoIn.awid = awid;
    dtoIn.date = new Date();
    let dtoOut = await this.dao.create(dtoIn)

    return dtoOut;
  }

}

module.exports = new TicketAbl();
