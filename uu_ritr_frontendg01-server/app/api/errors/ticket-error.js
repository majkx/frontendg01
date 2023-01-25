"use strict";

const RitrFrontendUseCaseError = require("./ritr-frontend-use-case-error.js");
const TICKET_ERROR_PREFIX = `${RitrFrontendUseCaseError.ERROR_PREFIX}ticket/`;

const Create = {
  UC_CODE: `${TICKET_ERROR_PREFIX}create/`,
  
};

const Get = {
  UC_CODE: `${TICKET_ERROR_PREFIX}get/`,
  
};

const List = {
  UC_CODE: `${TICKET_ERROR_PREFIX}list/`,
  
};

const Delete = {
  UC_CODE: `${TICKET_ERROR_PREFIX}delete/`,
  
};

module.exports = {
  Delete,
  List,
  Get,
  Create
};
