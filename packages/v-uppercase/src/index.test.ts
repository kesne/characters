import char from "./";
const expected = "V";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
