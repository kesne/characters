import char from "./";
const expected = "q";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
