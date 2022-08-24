import {simulateGetUserData_Success} from "../api-simulate";
import API_STATUS from "../../../api-status";
import {ALL_USER_DATA} from "../api-data";

describe("simulateGetUserData_Success", () => {
  it("should return successful api status", () => {
    // Arrange
    let email = ALL_USER_DATA[0].email;
    let password = ALL_USER_DATA[0].hashedPassword;
    let expected = API_STATUS.SUCCESS;

    // Act
    let result = simulateGetUserData_Success({email, password});

    // Assert
    expect(result.status).toBe(expected);

  });
});