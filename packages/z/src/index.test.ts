import char from "./";
const expected = "z";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
