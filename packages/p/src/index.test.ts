import char from "./";
const expected = "p";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
