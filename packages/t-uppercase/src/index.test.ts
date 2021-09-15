import char from "./";
const expected = "T";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
