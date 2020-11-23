// import "mocha";
// import chai from "chai";
// import chaiHttp from "chai-http";
// import { setupServer } from "../routes";

// const { Router } = require("express");
// const route = Router();

// chai.use(chaiHttp);
// chai.should();
// const { expect } = chai;

// const server = setupServer();
// describe("API Server", () => {
//   let request;
//   beforeEach(() => {
//     request = chai.request(server);
//   });
//   describe("GET /terms", () => {
//     // ステータスが200かどうか
//     it("should return status 200", async () => {
//       const res = await request.get("/terms");
//       res.should.have.status(200);
//     });
//     // n体のポケモンが取得できるかどうか
//     it("should get correct JSON data", async () => {
//       const res = await request.get("/terms");
//       res.should.be.json;
//       const obj = JSON.parse(res.text);
//       console.log(obj);
//     });
//   });
// });
