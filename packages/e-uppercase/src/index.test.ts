import char from "./";
const expected = "E";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
