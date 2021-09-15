import char from "./";
const expected = "B";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
