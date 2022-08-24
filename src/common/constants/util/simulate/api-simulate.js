
// This is to simulate retrieving data until the real endpoints are set up

import API_STATUS from "../../api-status";
import { ALL_USER_DATA } from "./api-data"
import { LoginResult } from "../../user";

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

//#region Password Hashing

export const hashPasswordToSimulate = (password) => {
  let newWord = '';
  for (let i = 0; i < password.length; i++) {
    newWord += translateChar(password.charAt(i));
  }
  return newWord;
}

const translateChar = (char) => {
  let upperChar = char.toUpperCase();
  switch (upperChar) {
    default:
      return char;
    case "A":
      return 'G';
    case "B":
      return "P";
    case "C":
      return "A";
    case "D":
      return "K";
    case "E":
      return "B";
    case "F":
      return "L";
    case "G":
      return "F";
    case "H":
      return "X";
    case "I":
      return "U";
    case "J":
      return "O";
    case "K":
      return "C";
    case "L":
      return "D";
    case "M":
      return "T";
    case "N":
      return "Y";
    case "O":
      return "M";
    case "P":
      return "W";
    case "Q":
      return "J";
    case "R":
      return "V";
    case "S":
      return "R";
    case "T":
      return "H";
    case "U":
      return "S";
    case "V":
      return "Q";
    case "W":
      return "E";
    case "X":
      return "Z";
    case "Y":
      return "N";
    case "Z":
      return "I";
    case "0":
      return "9";
    case "1":
      return "8";
    case "2":
      return "7";
    case "3":
      return "6";
    case "4":
      return "5";
    case "5":
      return "4";
    case "6":
      return "3";
    case "7":
      return "2";
    case "8":
      return "1";
    case "9":
      return "0";
  }
}

//#endregion

//#endregion