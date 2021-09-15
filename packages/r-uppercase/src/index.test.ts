import char from "./";
const expected = "R";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
