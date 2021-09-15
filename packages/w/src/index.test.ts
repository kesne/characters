import char from "./";
const expected = "w";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
