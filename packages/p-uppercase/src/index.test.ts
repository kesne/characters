import char from "./";
const expected = "P";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
