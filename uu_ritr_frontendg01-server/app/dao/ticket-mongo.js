"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class TicketMongo extends UuObjectDao {

  async createSchema(){
  }

  async create(uuObject){
    return await super.insertOne(uuObject);
  }

  async get(awid, id){
    return await super.findOne({awid, id})
  }

  async list(awid){
    return await super.find({awid});
  }

  async remove(awid, id){
    return await super.deleteOne({awid, id})
  }

}

module.exports = TicketMongo;
