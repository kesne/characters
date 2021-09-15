import char from "./";
const expected = "H";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
