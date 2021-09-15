import char from "./";
const expected = "y";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
