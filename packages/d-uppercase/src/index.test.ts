import char from "./";
const expected = "D";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
