import char from "./";
const expected = "J";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
