import char from "./";
const expected = "l";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
