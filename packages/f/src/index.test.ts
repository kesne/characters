import char from "./";
const expected = "f";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
