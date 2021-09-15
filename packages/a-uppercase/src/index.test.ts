import char from "./";
const expected = "A";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
