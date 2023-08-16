import { saveToken } from "./saveToken.js";
import LocalStorageMock from "../mocks/localStorage.mock.js";

const key = "token";
const token = "12345";

beforeAll(() => {
	global.localStorage = new LocalStorageMock();
	localStorage.removeItem(token);
});

describe("saveToken", () => {
	it("saves a token in storage", () => {
		expect(localStorage.getItem(key)).toBeNull();
		saveToken(token);
		expect(JSON.parse(localStorage.getItem(key))).toEqual(token);
	});
});
