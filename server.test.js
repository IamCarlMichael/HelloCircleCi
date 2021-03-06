const request = require("supertest");
const app = require("./app");

describe("Server", () => {
  it("/ GET should return a hello world", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello World!");
  });
});
