import char from "./";
const expected = "b";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
