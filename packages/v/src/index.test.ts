import char from "./";
const expected = "v";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
