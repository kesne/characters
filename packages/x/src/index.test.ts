import char from "./";
const expected = "x";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
