const expect = require("chai").expect;
const request = require("request");

describe("Test add two number", () => {
    const url = "http://localhost:8080/add";

    it("returns status code 200 when calling api", (done) => {
        request(url, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
});