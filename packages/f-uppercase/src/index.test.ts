import char from "./";
const expected = "F";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
