import char from "./";
const expected = "Y";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});