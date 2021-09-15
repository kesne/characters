import char from "./";
const expected = "W";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
