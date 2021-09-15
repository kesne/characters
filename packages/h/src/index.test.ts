import char from "./";
const expected = "h";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
