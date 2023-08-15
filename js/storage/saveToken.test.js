import { saveToken } from "./saveToken.js";

const key = "token";
const token = "12345";

describe("saveToken", () => {
	it("saves a token in storage", () => {
		saveToken(token);
		expect(localStorage.getItem(key)).toEqual(token);
	});
});
