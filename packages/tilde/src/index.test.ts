import char from "./";
const expected = "~";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});

test("Character should have length of 1", () => {
  expect(char).toHaveLength(1);
});
