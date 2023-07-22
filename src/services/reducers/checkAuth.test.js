import { AUTH_CHECKED } from "../actions/checkAuth";
import { checkAuthReducer } from "./checkAuth";

describe("checkAuthReducer", () => {
  const checkDetails = {
    authChecked: false,
    authFetchRequest: false,
  };

  it("checkAuthReducer", () => {
    expect(checkAuthReducer(undefined, {})).toEqual({
      ...checkDetails,
    });
  });

  it("should handle AUTH_CHECKED", () => {
    const action = { type: AUTH_CHECKED };
    expect(checkAuthReducer(checkDetails, action)).toEqual({
      ...checkDetails,
      authChecked: true,
      authFetchRequest: false,
    });
  });
});
