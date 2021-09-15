import char from "./";
const expected = "n";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
