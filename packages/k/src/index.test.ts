import char from "./";
const expected = "k";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
