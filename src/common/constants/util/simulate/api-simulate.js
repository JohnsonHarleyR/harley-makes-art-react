
// This is to simulate retrieving data until the real endpoints are set up

import API_STATUS from "../../api-status";
import { ALL_USER_DATA } from "./api-data"
import { LoginResult } from "../../user";
import { hashPasswordToSimulate } from "../simulate-helpers";

//#region User

export const simulateGetUserData_Success = ({email, password}) => {
  let allData = ALL_USER_DATA;

  let data = null;
  let doesExist = false;
  let isValidPassword = false;
  allData.forEach(d => {
    if (d.email === email) {
      doesExist = true;
      if (hashPasswordToSimulate(password) === d.hashedPassword) {
        isValidPassword = true;
        data = d;
      }
    }
  });

  let loginResult = doesExist === true
    ? isValidPassword === true
      ? LoginResult.SUCCESS
      : LoginResult.INVALID_PASSWORD
    : LoginResult.DOES_NOT_EXIST;
  return {
    status: API_STATUS.SUCCESS,
    data: {
      result: loginResult,
      user: data,
    },
  }
}

//#endregion