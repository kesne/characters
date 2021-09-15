import char from "./";
const expected = "t";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
