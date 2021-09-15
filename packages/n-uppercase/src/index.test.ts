import char from "./";
const expected = "N";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
