import char from "./";
const expected = "G";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
