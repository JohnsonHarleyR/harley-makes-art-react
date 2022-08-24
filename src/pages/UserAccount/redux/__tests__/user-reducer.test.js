import userReducer from "../reducers";
import actions from "../actions";

describe("User Reducer", () => {

  it("should fail to log user in", () => {
    const initialState = {
      isLoggedIn: true,
      errorMessage: null,
      accountInfo: null,
    }
    const expectedState = {
      isLoggedIn: false,
      errorMessage: "error test",
      accountInfo: null,
    }
    let action = actions.failToLogUserIn("error test");
    let newState = userReducer(initialState, action);
    
    expect(newState).toEqual(expectedState);
  });
})