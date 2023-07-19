import { checkResponse } from "./utilsApi";

describe("Response utilsAPi", () => {
  it("Should be OK when get response SUCCSS", () => {
    const mockResponse = { ok: true, json: () => 200 };
    expect(checkResponse(mockResponse)).toEqual(200);
  });

  // it("Should throw reject if response FAILED", () => {
  //   const mockResponse = { ok: false, json: () => 404 };
  //   expect(checkResponse(mockResponse)).rejects.toEqual(404);
  // });
});
