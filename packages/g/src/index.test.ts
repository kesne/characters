import char from "./";
const expected = "g";

test("Expected imported character to match hard-coded character", () => {
  expect(char).toBe(expected);
});
