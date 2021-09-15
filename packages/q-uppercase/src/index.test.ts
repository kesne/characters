import char from "./";
const expected = "Q";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
