import char from "./";
const expected = "i";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
