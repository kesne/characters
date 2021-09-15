import char from "./";
const expected = "m";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
